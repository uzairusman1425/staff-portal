import TopBar from "../../../components/top-bar/TopBar"
import Header from "../../../components/header/Header"

export default function Blog({ params }) {

    console.log(params?.id)

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <TopBar />
            <Header title="Blog" />
            <div className="w-[95%] my-20 flex-1 flex flex-col gap-20 overflow-y-auto scrollbar-none">
                <div className="text-3xl font-semibold">Grid system for better Design User Interface</div>
                <div className="text-xl font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.</div>
            </div>
        </div>
    )
}