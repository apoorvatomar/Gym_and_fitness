const User = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const closeRegisterModal = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={openLoginModal}
      >
        Open Login Modal
      </button>

      <LModal
        isOpen={isLoginOpen}
        onClose={closeLoginModal}
        onSwitch={openRegisterModal}
      />

      <RModal
        isOpen={isRegisterOpen}
        onClose={closeRegisterModal}
        onSwitch={openLoginModal}
      />
    </div>
  );
};

export default User;
