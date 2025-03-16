function UserProfile() {
    return (
      <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center md:text-xl sm:w-24 sm:h-24">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto sm:p-4 md:max-w-sm md:text-xl sm:w-24 sm:h-24 transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 my-4 transition-colors duration-300 ease-in-out hover:text-blue-500">
          John Doe
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  