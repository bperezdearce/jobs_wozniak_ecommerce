import Login from "@/components/Login";
import Register from "@/components/Register";

function AuthPage () {
    return (
        <div className="grid md:grid-cols-2 min-h-fit w-full">
            <div className="flex items-center justify-center p-6 md:p-12 bg-highlight-color">
                <div className="max-w-[400-px] space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="font-garamondbold text-background-color text-2xl">Bienvenido/a de vuelta</h1>
                        <p className="font-garamondregular text-xl
                        text-background-color">Inicia sesión en tu cuenta para continuar</p>
                    </div>
                    < Login />
                </div>
            </div>
            <div className="flex items-center justify-center p-6 md:p-12 bg-white">
                <div className="max-w-[400-px] space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="font-garamondbold text-2xl text-text-color">Crear una cuenta</h1>
                        <p className="font-garamondregular text-xl text-text-color">Regístrate para comprar en Jobs&Wozniak</p>
                    </div>
                    <Register />
                </div>
            </div>
        </div>
    )
}

export default AuthPage;