
import Image from "next/image"
import{
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon,
}from "@heroicons/react/outline"

function Header() {
  return (
    <div>
    <div className='flex justify-between max-w-6xl'>
      <div className='relative h-24 w-24 cursor-pointer'>
          <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain"/>
      </div>

      <div className='mt-1 relative p-3 rounded-md'>
          <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
          <SearchIcon className='h-5 w-5 text-gray-500'/>
          </div>
          <input className="bg-gray-50 block w-full pl-10 border-gray-300 rounded-md" type="text" placeholder="Search"/>
      </div>
      {/* <div className="icons">
           <HomeIcon className="icons_n"/>
           <MenuIcon className="icons_n"/>
           <PlusCircleIcon className="icons_n"/>
           <PaperAirplaneIcon className="icons_n"/>
       </div> */}
    </div>
    </div>
  )
}

export default Header
