const CoffeeClub = () => {
  return (
    <>
      <main class='container mx-auto px-6 py-12'>
        <div class='bg-white shadow rounded-lg p-8 max-w-lg mx-auto'>
          <h2 class='text-2xl font-bold mb-6 text-center'>
            Contact Information (required)
          </h2>
          <form
            action='#'
            method='POST'>
            <div class='mb-4'>
              <label
                for='first-name'
                class='block text-sm font-medium text-gray-700'>
                First Name
              </label>
              <input
                type='text'
                id='first-name'
                name='first-name'
                required
                class='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              />
            </div>
            <div class='mb-4'>
              <label
                for='last-name'
                class='block text-sm font-medium text-gray-700'>
                Last Name
              </label>
              <input
                type='text'
                id='last-name'
                name='last-name'
                required
                class='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              />
            </div>
            <div class='mb-4'>
              <label
                for='email'
                class='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                class='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              />
            </div>
            <div class='mb-6'>
              <label
                for='phone'
                class='block text-sm font-medium text-gray-700'>
                Phone
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                required
                class='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              />
            </div>
            <button
              type='submit'
              class='w-full py-3 px-6 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'>
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default CoffeeClub;
