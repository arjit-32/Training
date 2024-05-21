
const Assignment1 = () => {
    return (
        <div className='grid grid-rows-3 border-2 min-w-80 min-h-96'>
          <div className="bg-teal-500 relative">
            <img 
              src="https://pbs.twimg.com/profile_images/1785753702575583238/bdXc9eHN_400x400.jpg" 
              alt="profile-image"
              className=" rounded-full max-h-24 absolute top-[60px] left-28 right-0"
              />
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="flex items-center"><h1 className="pr-2 text-lg font-medium">Arjit Sharma</h1> <p className="text-sm text-gray-400">25</p></div>
            <p className="text-gray-400">India</p>
          </div>
          <div className="flex justify-evenly">
              <div>
                <p className="text-lg font-medium">80K</p>
                <p className="text-sm text-gray-400">Followers</p>
              </div>
              <div>
                <p className="text-lg font-medium">803K</p>
                <p className="text-sm text-gray-400">Likes</p>
              </div>
              <div>
                <p className="text-lg font-medium">1.4K</p>
                <p className="text-sm text-gray-400">Photos</p>
              </div>
          </div>
        </div>
    )
}

export default Assignment1