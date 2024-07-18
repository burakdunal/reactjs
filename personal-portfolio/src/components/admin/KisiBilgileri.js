// import React from 'react';
// import { Card } from 'antd';
// const { Meta } = Card;

// const KisiBilgileriCard = ({userData, backendEndpoint}) => (
//   <Card
//     hoverable
//     style={{
//       width: 240,
//     }}
//     cover={<img alt="example" src={`${backendEndpoint}/images/user/${userData.img}`} />}
//   >
//     <Meta title={userData.fullName} description="" />
//   </Card>
// );
// export default KisiBilgileriCard;
"use client"
import { useRef, useState } from "react";
import {
  Select,
  Space,
  Switch,
  Modal,
  Upload,
  Button,
  Form,
  Input,
  Row,
  Col,
  Image,
} from "antd";
import { CheckOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function KisiBilgileriCard({userData, backendEndpoint, onEditPerson}) {
  const [enteredName, setEnteredName] = useState(userData.fullname);
  const [enteredTitle, setEnteredTitle] = useState(userData.title);
  const [enteredEmail, setEnteredEmail] = useState(userData.email);
  const [enteredLocation, setEnteredLocation] = useState(userData.location);
  const [enteredDescription, setEnteredDescription] = useState(userData.about);
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedFile2, setSelectedFile2] = useState("");

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [fileList2, setFileList2] = useState([]);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0 && newFileList[0].percent === 100) {
      setSelectedFile(newFileList[0].originFileObj);
    } else {
      setSelectedFile("");
    }
  };
  const handleUploadChange2 = ({ fileList2: newFileList2 }) => {
    setFileList2(newFileList2);
    if (newFileList2.length > 0 && newFileList2[0].percent === 100) {
      setSelectedFile2(newFileList2[0].originFileObj);
    } else {
      setSelectedFile2("");
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Görsel seç
      </div>
    </button>
  );
  const uploadButton2 = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        CV seç
      </div>
    </button>
  );

  function formSubmitHandler() {
    const enteredUserData = {
      isPerson: true,
      name: enteredName,
      title: enteredTitle,
      email: enteredEmail,
      location: enteredLocation,
      about: enteredDescription,
      image: selectedFile
    };
    onEditPerson(enteredUserData);
  };

  return (
    <Row>
      <Col span={10}>
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {/* {images} */}
          <Image width={200} src={backendEndpoint + '/' + userData.img} />
        </Image.PreviewGroup>
      </Col>
      <Col span={14}>
        <Form
          layout="horizontal" // "horizontal" "vertical"
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            size: "default",
          }}
          size="default"
          style={{
            maxWidth: 640,
            padding: 15,
          }}
          onFinish={formSubmitHandler}
        >
          <Form.Item name="name" label="İsim Soyisim">
            <Space
              direction="vertical"
              style={{
                width: "100%",
              }}
            >
              <Input defaultValue={enteredName} onChange={(e) => setEnteredName(e.target.value)} />
            </Space>
          </Form.Item>
          <Form.Item name="title" label="Ünvan">
            <Space
              direction="vertical"
              style={{
                width: "100%",
              }}
            >
              <Input defaultValue={enteredTitle} onChange={(e) => setEnteredTitle(e.target.value)} />
            </Space>
          </Form.Item>
          <Form.Item name="email" label="E-Posta">
            <Space
              direction="vertical"
              style={{
                width: "100%",
              }}
            >
              <Input defaultValue={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)} />
            </Space>
          </Form.Item>
          <Form.Item name="location" label="Lokasyon">
            <Space
              direction="vertical"
              style={{
                width: "100%",
              }}
            >
              <Input defaultValue={enteredLocation} onChange={(e) => setEnteredLocation(e.target.value)} />
            </Space>
          </Form.Item>
          <Form.Item name="description" label="Hakkımda">
            <Space
              direction="vertical"
              style={{
                width: "100%",
              }}
            >
              <TextArea rows={10} defaultValue={enteredDescription} onChange={(e) => setEnteredDescription(e.target.value)} />
            </Space>
          </Form.Item>
          <Form.Item label="Fotoğraf">
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleUploadChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal
              width={680}
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
          </Form.Item>
          <Form.Item label="Özgeçmiş">
          <Upload
              listType="text"
              fileList={fileList2}
              onChange={handleUploadChange2}
            >
              {fileList.length >= 1 ? null : uploadButton2}
            </Upload>
          </Form.Item>
          <Form.Item label="" wrapperCol={{ span: 18, offset: 5 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Kaydet
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default KisiBilgileriCard;
