const Shop = () => {
  return (
    <>
      <main class='container mx-auto px-6 py-12'>
        <h2 class='text-3xl font-bold text-center mb-4'>Merchandise</h2>
        <p class='text-center text-gray-600 mb-12'>In-store purchase only.</p>

        <div class='grid md:grid-cols-3 gap-10'>
          <div class='space-y-4'>
            <img
              src='https://placehold.co/600x600'
              alt='A person holding a white tote bag with DRIPBEANS COFFEE branding, indicating merchandise available at the coffee shop.'
              class='rounded-lg shadow-lg'
            />
            <h3 class='text-lg font-semibold text-center'>White Tote Bag</h3>
            <p class='text-center text-gray-500'>$15.00</p>
          </div>
          <div class='space-y-4'>
            <img
              src='https://placehold.co/600x600'
              alt='A person holding a black tote bag with DRIPBEANS COFFEE branding, indicating merchandise available at the coffee shop.'
              class='rounded-lg shadow-lg'
            />
            <h3 class='text-lg font-semibold text-center'>Black Tote Bag</h3>
            <p class='text-center text-gray-500'>$15.00</p>
          </div>
          <div class='space-y-4'>
            <img
              src='https://placehold.co/600x600'
              alt='A person holding a stainless steel tumbler with DRIPBEANS COFFEE branding, indicating merchandise available at the coffee shop.'
              class='rounded-lg shadow-lg'
            />
            <h3 class='text-lg font-semibold text-center'>
              Stainless Steel Tumbler
            </h3>
            <p class='text-center text-gray-500'>$15.00</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Shop;
