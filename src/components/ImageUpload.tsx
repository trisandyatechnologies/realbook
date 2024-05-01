"use client";

import { Button, Card, Flex, theme } from "antd";
import { CldUploadWidget } from "next-cloudinary";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getImage } from "@/utils/util";

interface ImageUploadProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onChange?: (value: string[]) => void;
  value?: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled = false,
  onChange,
  value = [],
  children = "Upload Image",
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [images, setImages] = useState(value);
  const {
    token: { padding },
  } = theme.useToken();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    console.log(result);
    const newImages = [...images, result.info.path];
    setImages(newImages);
    onChange?.(newImages);
    console.log("UPLOAD", images, newImages);
  };

  const onRemove = (i: number, url: string) => {
    const newImages = [...images.slice(0, i), ...images.slice(i + 1)];
    setImages(newImages);
    onChange?.(newImages);
  };

  useEffect(() => {
    if (JSON.stringify(images) !== JSON.stringify(value)) {
      setImages(value);
    }
  }, [value, images]);

  if (!isMounted) {
    return null;
  }

  return (
    <Flex gap={padding / 2} className="image-upload">
      {images.map((path, i) => (
        <Flex
          key={path}
          className="thumbnail"
          justify="space-between"
          wrap="wrap"
        >
          <Button>
            <Image fill alt="Image" src={getImage(path)} />
          </Button>
          <Button
            key="delete"
            icon={<DeleteOutlined />}
            onClick={() => onRemove(i, path)}
          ></Button>
        </Flex>
      ))}
      <CldUploadWidget onUpload={onUpload} uploadPreset="cazyiuln">
        {({ open }) => {
          return (
            <Flex>
              <Button
                disabled={disabled}
                icon={<UploadOutlined />}
                onClick={() => open()}
                className="upload-btn"
              >
                {children}
              </Button>
            </Flex>
          );
        }}
      </CldUploadWidget>
    </Flex>
  );
};

export default ImageUpload;
