import { useEffect, useState } from "react"

const Assignment5 = () => {
    const [bio, setBio] = useState({})

    useEffect(()=>{
        fetch("https://api.github.com/users/arjit-32")
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setBio({
                    company: data.company,
                    followers: data.followers,
                    following: data.following,
                    repo: data.public_repos,
                    img: data.avatar_url
                })
            });
    },[])

    return (
        <div className='grid grid-rows-3 border-2 min-w-80 min-h-96'>
          <div className="bg-teal-500 relative">
            <img 
              src={bio.img} 
              alt="profile-image"
              className=" rounded-full max-h-24 absolute top-[60px] left-28 right-0"
              />
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="flex items-center"><h1 className="pr-2 text-lg font-medium">Arjit Sharma</h1> <p className="text-sm text-gray-400">25</p></div>
            <p className="text-gray-400">{bio.company}</p>
          </div>
          <div className="flex justify-evenly">
              <div>
                <p className="text-lg font-medium">{bio.followers}</p>
                <p className="text-sm text-gray-400">Followers</p>
              </div>
              <div>
                <p className="text-lg font-medium">{bio.following}</p>
                <p className="text-sm text-gray-400">Following</p>
              </div>
              <div>
                <p className="text-lg font-medium">{bio.repo}</p>
                <p className="text-sm text-gray-400">Public Repositories</p>
              </div>
          </div>
        </div>
    )
}

export default Assignment5