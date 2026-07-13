import Tareas from '../../../examplesbbdd/tareas.json'

export default function Alert() {

    return (
        <section className="bg-[#FF642F]/20 border border-[#FF642F] rounded-lg p-4 flex gap-2">

            <div className="bg-[#FF642F] flex w-22 h-10 justify-center items-center rounded-xl">
                <img src="../../public/dashboard/clock.png" alt="alerta" />
            </div>


            <div className="flex flex-col items-start gap-3">
                <div>
                    <h2 className="text-[#FFFFFF] text-lg">
                        <b>{Tareas.tarea}</b>
                    </h2>

                    <p className="text-sm text-[#B8A6A0] font-semibold">
                        {Tareas.descripcion}
                    </p>

                </div>

                <button className="text-[#FF875F] font-bold">
                    Revisar alertas &gt;
                </button>
            </div>
        </section>
    )
}