import Header from "../components/dashboard/header//Header";
import Alert from "../components/dashboard/header/Alert";
import Vehiculos from "../examplesbbdd/vehiculos.json"

export default function Dashboard() {
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <Alert />

                <h2 className="text-[#FFFFFF] text-2xl font-bold mt-4">Mis vehículos</h2>
                <p className="text-[#8E939A] mb-4">{Vehiculos.length} vehículos registrados</p>

                <div className="flex flex-col gap-7">
                    {Vehiculos.map(vehiculo =>
                        <div className="bg-[#FFFFFF]/9  rounded-xl p-2">


                            <div className="flex flex-col">

                                <div className="flex gap-2">
                                    <img src={vehiculo.photo} alt="prueba" />
                                    <div className="flex flex-col">
                                        <h3 className="text-[#FFFFFF] text-xl font-bold">{vehiculo.marca} {vehiculo.modelo}</h3>
                                        <div className="my-1 flex items-center gap-2">
                                            <div>
                                                <img src="../../public/dashboard/licenceplate.svg" />
                                            </div>
                                            <p className="text-[#9A9EA5]">{vehiculo.matricula}</p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div>
                                                <img src="../../public/dashboard/km.svg" alt="speedometer" />
                                            </div>
                                            <p className="text-[#C7C9CD]">{vehiculo.km}</p>
                                        </div>

                                    </div>
                                </div>

                                <hr className="my-2 bg-[#FFFFFF]" />

                                <div className="flex gap-2">
                                    <h4 className="text-[#8E939A]">
                                        Próximo:
                                    </h4>
                                    {vehiculo.proximo.map(proxima =>
                                        <div className="flex text-[#D9DBDF]">
                                            <p>{proxima.necesita}</p>
                                            &nbsp; · &nbsp;
                                            <p>{proxima.fecha}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}