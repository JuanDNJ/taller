import { useState, type FC } from 'react'
import Container from '@/components/ui/Container'
import Title from '@/components/atoms/Title'
import { ABOUT } from '@/config'

type LegacyProps = { label: string, description: string, icon?: string }

const HistoryTemplate: FC = () => {
  const [items] = useState<LegacyProps[]>(ABOUT.history.story_elements)

  return (
        <Container id="history">
            <article className="my-11 xl:my-22">
                <section className='md:grid md:grid-cols-2 gap-4'>
                    <article className='flex flex-col '>
                        <Title size='xl' label="Nuestra Historia" />
                        <p className='text-typography text-xl mt-4'>
                            Fundado en el corazón de la excelencia industrial, Taller CLOE comenzó con un solo elevador
                            y la visión de redefinir el mantenimiento automotriz para vehículos de lujo y alto
                            rendimiento. Hoy, somos el referente de autoridad técnica.
                        </p>
                    </article>
                    <article className='flex flex-col items-center md:items-end  md:justify-end gap-4 pt-8 md:p-0'>
                        <i className='inline-flex text-gray-800 text-6xl font-black'>30+ AÑOS</i>
                    </article>
                </section>
                <section className='md:grid md:grid-cols-3 gap-8 md:pb-22'>
                    {items.map((item, index) => (
                        <article key={index} className="mt-12 border-2 rounded border-yellow-500/30 p-8 flex flex-col gap-4">
                            <img src={item.icon} alt={item.label} width={26} height={26} />
                            <div>
                                <Title label={item.label} />
                                <p className=' text-lg mt-4'>
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </section>
            </article>
        </Container>
  )
}

export default HistoryTemplate
