import RegisterForm from "@/components/Register Form";

const RegisterPage: React.FC = () => {
  const grootGif =
    "https://media1.giphy.com/media/3o7aDcrsww5Ybp18hq/giphy.gif?cid=ecf05e47wxsxqtgz13upbhp328xnpl751oset25dxjqnu6w8&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  return (
    <div
      className="flex w-screen h-screen items-center justify-center flex-col bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${grootGif})`,
        backgroundPosition: "center",
      }}
    >
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
