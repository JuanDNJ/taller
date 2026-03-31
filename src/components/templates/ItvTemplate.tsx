import { useState, type FC } from 'react'
import Template from '../ui/Template'
import { ITV_MOOK } from '@/config'
import { CoustomersReviews, type CustomerReviewProps } from '../../mook'
import CustomerReview from '../CustomerReview'
import Title from '../Title'
const ItvTemplate:FC = () => {
  const [customersReviews] = useState<CustomerReviewProps[]>(CoustomersReviews)
  return (
        <Template id="itv">
        {/* ITV */}
        <article className="grid grid-flow-row md:grid-flow-col my-8 gap-4 xl:gap-22">
          <section className="mt-8 flex flex-wrap items-center lg:col-span-2 gap-8 lg:gap-0">
            <article className="flex flex-col gap-4">
              <Title label={ITV_MOOK.label} tag="h2" size="lg" />
              <p className="text-paragraph">
                {ITV_MOOK.description}
              </p>
            </article>
            <article className="w-full lg:max-w-md bg-title rounded-sm lg:rounded-xl py-4 flex gap-8 relative">
              <div className="flex items-center gap-4">
                {customersReviews.map((review, index) => (
                  <CustomerReview key={index} {...review} />
                ))}

              </div>
              <div className='flex items-center'>
                <span className="xxs:text-xs xs:text-sm sm:text-lg md:text-xl text-link">Lo que dicen nuestros clientes</span>
              </div>
            </article>
          </section>
          <section className="mt-8">
            <Title label={ITV_MOOK.book_an_appointment.label} tag="h2" size="lg" />
            <span className="text-paragraph">
              {ITV_MOOK.book_an_appointment.description}
            </span>
            <form className="mt-4 flex flex-col space-y-2 bg-form p-4 rounded-sm lg:rounded-xl">
              <input
                id="name"
                name="name"
                type="text"
                placeholder={ITV_MOOK.book_an_appointment.data.name}
                className="w-full mt-4 px-4 py-2 rounded bg-input-bg text-input-text"
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder={ITV_MOOK.book_an_appointment.data.email}
                className="w-full mt-4 px-4 py-2 rounded bg-input-bg text-input-text"
              />
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder={ITV_MOOK.book_an_appointment.data.phone}
                className="w-full mt-4 px-4 py-2 rounded bg-input-bg text-input-text"
              />
              <textarea
                id="message"
                name="message"
                placeholder={ITV_MOOK.book_an_appointment.data.message}
                className="w-full mt-4 px-4 py-2 rounded bg-input-bg text-input-text"
              ></textarea>
              <button

                type="submit"
                className="mt-4 px-4 py-2 bg-yellow-500 font-bold rounded"
              >
                Enviar
              </button>
            </form>
          </section>
        </article>
      </Template>
  )
}

export default ItvTemplate
