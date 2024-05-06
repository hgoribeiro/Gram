import '../Style/Feed.css'
import Image from 'next/image'
import gearConfig from '/config.png'
export const Feed = () => {
    return (
        <div className="main-feed-div">

            <nav className="navbar navbar-light bg-light justify-content-between">
                <a href=".">
                    <Image src="/facebook.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"></Image>
                </a>
                {/*<a href="." className="my-2 my-sm-0"><img className='gearIcon' src={gearConfig}></img></a>*/}
            </nav>

        </div>

    )
}

