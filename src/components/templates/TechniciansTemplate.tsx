import type { FC } from 'react'
import Container from '@/components/atoms/Container'
import { OUR_TECHNICIANS } from '@/config'
import Title from '@/components/atoms/Title'

const TechniciansTemplate: FC = () => {
  return (
        <Container id="technicians">
            <article className='md:max-w-6xl'>
                <Title size='xl' label={OUR_TECHNICIANS.label} />
                <p className='text-xl'>
                    {OUR_TECHNICIANS.description}
                </p>
            </article>
            <article className='flex flex-col md:flex-row md:flex-wrap gap-4 mt-8 justify-around'>
                {OUR_TECHNICIANS.technicians.map((tech, index) => (
                    <section key={index} className="w-full md:max-w-90 flex flex-col gap-6 my-8 justify-between border-2 rounded border-yellow-500/30">
                        <img src={tech.image} alt={tech.name} className="w-full min-h-[9rem] max-h-[18rem] aspect-[4/3] object-cover" />
                        <article className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-2 text-typography px-2'>
                                <Title className="text-yellow-500 font-bold" label={tech.name} />
                                <strong className="text-sm font-black">{tech.role}</strong>
                                <p title={tech.experience} className="">{tech.experience}</p>
                            </div>
                            <div className="flex flex-col md:grid md:grid-cols-3 gap-2 justify-between py-4 px-2">
                                <strong className='col-span-full'>Especialidades:</strong>
                                {tech.specialties.map((specialty, idx) => (
                                    <span key={idx} className='text-typography text-xs text-center rounded-sm border border-cyan-500/50 py-1'>{specialty}</span>
                                ))}
                            </div>
                        </article>
                    </section>
                ))}
            </article>
        </Container>
  )
}

export default TechniciansTemplate
