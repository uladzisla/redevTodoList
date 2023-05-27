import InputForm from "../components/InputForm";
import { Layout, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const LoginPage = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <div className="container"></div>
      <Layout>
        <Content style={contentStyle}>
          <h1>Вход</h1>
          <InputForm />
        </Content>
      </Layout>
    </Space>
  );
};
export default LoginPage;
