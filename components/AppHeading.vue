<template>
  <div
    class="heading container pt-7 flex flex-col items-center justify-center font-noto"
  >
    <div class="avatar mb-7">
      <img
        class="w-32"
        src="https://cdn.dribbble.com/users/25410/avatars/normal/5b09e126a34b6b0d153230cf57be0397.png?1501248740"
        alt=""
      />
    </div>
    <div class="flex flex-col items-center justify-center space-y-6">
      <div
        class="font-satisfy text-4xl text-center text-gray-800 dark:text-gray-200"
      >
        Aji Surochman
      </div>
      <div
        class="text-center text-sm text-gray-400 dark:text-gray-300 leading-relaxed sm:px-60"
      >
        <p>
          Creative Director at Udin Pusip. Jakarta, Indonesia, Jalan jalan
          adalah hobiku.
        </p>
      </div>
      <div class="flex space-x-10">
        <AppBtnDarkMode />

        <AppIcon name="instagram" href="#" />
        <AppIcon name="youtube" href="#" />
      </div>
    </div>
  </div>
</template>
