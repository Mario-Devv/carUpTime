import User from '../../../examplesbbdd/users.json'
import Grettings from '../../../functions/dashborad/Grettings'

export default function Header(){
    return (
         <section className='pb-4 relative flex'>
                    <div>
                        <h1 className='text-[#ff7a4d] font-semibold text-sm'>
                            Mi garaje
                        </h1>

                        <h2 className='text-[#FFFFFF] text-2xl font-bold'>
                            {Grettings()}, {User.name}
                        </h2>

                        <p className='text-[#959AA2] text-sm'>
                            Esto es lo que necesita tu atención hoy.
                        </p>
                    </div>

                    <div className='bg-[#191A1D] h-10 w-10 flex justify-center items-center ml-2.5 rounded-xl hover:cursor-pointer'>
                        <img src="../../../public/dashboard/bell.webp" alt="notificación" />
                        <span className="before:content-[''] before:absolute before:top-1 before:w-2 before:h-2 before:bg-red-500 before:rounded-full"></span>
                    </div>
                </section>
    )
}