const ContactUs = () => {
  return (
    <>
      <main class='container mx-auto px-6 py-12'>
        <h2 class='text-3xl font-bold text-center mb-4'>Contact Us</h2>
        <p class='text-center text-gray-600 mb-12'>
          We love to hear from our customers. Contact us for any queries or
          feedback.
        </p>

        <div class='flex justify-center'>
          <form
            action='#'
            method='POST'
            class='w-full max-w-lg'>
            <div class='flex flex-wrap -mx-3 mb-6'>
              <div class='w-full px-3'>
                <label
                  class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='name'>
                  Name
                </label>
                <input
                  class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='name'
                  type='text'
                  placeholder='Jane Doe'
                />
              </div>
            </div>
            <div class='flex flex-wrap -mx-3 mb-6'>
              <div class='w-full px-3'>
                <label
                  class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='email'>
                  Email
                </label>
                <input
                  class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='email'
                  type='email'
                  placeholder='email@example.com'
                />
              </div>
            </div>
            <div class='flex flex-wrap -mx-3 mb-6'>
              <div class='w-full px-3'>
                <label
                  class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='subject'>
                  Subject
                </label>
                <input
                  class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='subject'
                  type='text'
                  placeholder='Enter subject'
                />
              </div>
            </div>
            <div class='flex flex-wrap -mx-3 mb-6'>
              <div class='w-full px-3'>
                <label
                  class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='message'>
                  Message
                </label>
                <textarea
                  class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='message'
                  placeholder='Your message'></textarea>
              </div>
            </div>
            <div class='flex justify-center'>
              <button
                class='shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                type='submit'>
                Send
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
