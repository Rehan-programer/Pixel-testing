import React from 'react'

const ServicesButton = ({MainService,selectedCategory,handleSelectChange}) => {
  return (
       <div className="hidden lg:flex justify-center flex-wrap gap-2">
        {MainService?.map((category, index) => (
          <button
            key={index}
            onClick={() => handleSelectChange(category.id)}
            className={`cursor-pointer lg:text-[clamp(0.9rem,1vw,1.3rem)]
 rounded-md p-[0.6%] font-[400]  capitalize transition-all duration-200 ${
              selectedCategory === category.id
                ? "border-b-2 border-[#292A76] bg-[#00cfaa] text-[#ffff]"
                : "border-b-2 border-transparent text-[#292A76] hover:bg-green-50"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>  
  )
}

export default ServicesButton
