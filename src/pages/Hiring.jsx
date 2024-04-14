const Hiring = () => {
  return (
    <>
      <main class='container mx-auto px-6 py-12'>
        <h2 class='text-3xl font-bold text-center mb-4'>Join Our Team</h2>
        <p class='text-center text-gray-600 mb-12'>
          Looking for a career at DripBeans Coffee? Explore our open positions
          and become a part of our passionate team.
        </p>

        <form
          action='#'
          method='POST'
          class='w-full max-w-lg mx-auto bg-white p-8 shadow-md'>
          <div class='mb-4'>
            <label
              for='name'
              class='block text-gray-700 text-sm font-bold mb-2'>
              Name:
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Full Name'
              required
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div class='mb-4'>
            <label
              for='address'
              class='block text-gray-700 text-sm font-bold mb-2'>
              Address:
            </label>
            <input
              type='text'
              name='address'
              id='address'
              placeholder='Your Address'
              required
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div class='mb-4'>
            <label
              for='phone'
              class='block text-gray-700 text-sm font-bold mb-2'>
              Phone Number:
            </label>
            <input
              type='tel'
              name='phone'
              id='phone'
              placeholder='Your Phone Number'
              required
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div class='mb-4'>
            <label
              for='email'
              class='block text-gray-700 text-sm font-bold mb-2'>
              Email:
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your Email'
              required
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div class='mb-6'>
            <label
              for='availability'
              class='block text-gray-700 text-sm font-bold mb-2'>
              Work Availability:
            </label>
            <select
              name='availability'
              id='availability'
              class='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
              <option value=''>Select...</option>
              <option value='full_time'>Full Time</option>
              <option value='part_time'>Part Time</option>
              <option value='temporary'>Temporary</option>
            </select>
          </div>
          <div class='flex items-center justify-between'>
            <button
              class='shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'>
              Submit Application
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Hiring;
