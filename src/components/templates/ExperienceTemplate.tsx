import { useState, type FC } from 'react'
import Container from '@/components/atoms/Container'
import HeroTop from '@/components/molecules/HeroTop'
import Banner from '@/components/molecules/Banner'
import Btn from '@/components/atoms/Btn'

const ExperienceTemplate: FC<{ id?: string }> = ({ id = 'technicians' }) => {
    const [idTmp] = useState<string>(id)
    return (
        <Container id={`${idTmp}-container`}>
            <HeroTop className='py-8 md:p-22 text-center bg-gray-500/10 my-22'>
                <div className='max-w-3xl mx-auto'>
                    <Banner
                        label={'¿Listo para la Experiencia, en el Taller de CLOE?'}
                        description={`Únase a los cientos de propietarios 
              que confían sus activos más preciados a nuestro 
              cuidado quirúrgico. Su vehículo merece la mejor
              mente de ingeniería disponible.`}
                    >
                        <footer className='flex justify-center mt-8 lg:py-12 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 '>
                            <Btn className="bg-tertiary border-transparent py-2 px-6 text-xl" label="Reserve su Servicio" onClick={() => console.log('Contact button clicked')} />
                            <Btn className="bg-white/20 border-white/10 py-2 px-6 text-xl" label="Ver flota Tecnica" onClick={() => console.log('Progress button clicked')} />
                        </footer>
                    </Banner>
                </div>
            </HeroTop>
        </Container>
    )
}

export default ExperienceTemplate
