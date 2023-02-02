import { Head } from '@inertiajs/react'
import { router } from '@inertiajs/react'
import { Field, withTypes } from 'react-final-form'

import { Header } from '../Components/Molecules/Header'
import { makeInboxUrl } from '../Utilities/urls'

export default function Welcome () {
  return (
    <section>
      <Head>
        <title>Laravel</title>
      </Head>

      <Header/>

      <FormSection/>
    </section>
  )
}

declare type FormValues = {
  prefix: string
  domain: string
}

const FormSection = () => {
  const { Form } = withTypes<FormValues>()

  const onSubmit = ({
    prefix,
    domain
  }: FormValues) => {
    if (!prefix || !domain) {
      return
    }

    router.visit(makeInboxUrl(prefix + domain))
  }

  return (
    <div className="py-36">
      <div className="px-2 mx-auto max-w-xl">
        <h2 className="font-bold text-3xl text-gray-900 text-center">
          Disposable Email
        </h2>

        <p className="text-gray-700 text-center mt-4">
          You can use any address @huffymail.com and check those public inboxes
          by entering the public inbox in the field below.
        </p>
      </div>

      <Form onSubmit={onSubmit} initialValues={{ domain: '@huffymail.com' }}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="px-2 mt-12 mx-auto max-w-sm">
              <div className="columns-2 gap-2">
                <div>
                  <Field name="prefix">
                    {({ input }) => (
                      <input
                        type="text"
                        placeholder="john.doe"
                        className="border border-gray-200 rounded text-gray-700 focus:border-gray-900 focus:outline-none p-2 h-12 w-full"
                        required
                        {...input}
                      />
                    )}
                  </Field>
                </div>

                <div>
                  <div className="flex items-center border border-gray-200 rounded px-2 h-12">
                    <Field
                      name="domain"
                      component="select"
                      className="text-gray-700 focus:outline-none w-full"
                      required
                    >
                      <option value="@huffymail.com">@huffymail.com</option>
                    </Field>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button type="submit" className="rounded bg-blue-500 text-white font-medium h-12 w-full">
                  Go to Inbox
                </button>
              </div>
            </div>
          </form>
        )}
      </Form>
    </div>
  )
}
