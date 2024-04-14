const OrderOnline = () => {
  return (
    <>
      <main class='container mx-auto px-6 py-12'>
        <h2 class='text-3xl font-bold text-center mb-10'>Locations</h2>
        <p class='text-center text-gray-600 mb-12'>
          Order our exceptional coffee online or for quick pick-up. Experience
          professional service with the convenience you deserve. Indulge in the
          perfect blend of flavor and efficiency today.
        </p>

        <div class='grid md:grid-cols-2 gap-10'>
          <div class='space-y-4'>
            <img
              src='https://placehold.co/600x400'
              alt='Interior of DaVien Coffee shop in Westminster, CA, showing a white statue, wall plants, and seating area.'
              class='rounded-lg shadow-lg'
            />
            <h3 class='text-xl font-semibold text-center'>Westminster, CA</h3>
            <p class='text-center text-gray-500'>
              Address: 9731 Bolsa Ave, Westminster, CA 92683
            </p>
            <div class='text-center'>
              <button
                class='shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                type='submit'>
                Order Now
              </button>
            </div>
          </div>
          <div class='space-y-4'>
            <img
              src='https://placehold.co/600x400'
              alt='Interior of DaVien Coffee shop in Garden Grove, CA, with modern furniture and wall art.'
              class='rounded-lg shadow-lg'
            />
            <h3 class='text-xl font-semibold text-center'>Garden Grove, CA</h3>
            <p class='text-center text-gray-500'>
              Address: 9562 Garden Grove Blvd Ste A, Garden Grove, CA 92844
            </p>
            <div class='text-center'>
              <button
                class='shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                type='submit'>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderOnline;
