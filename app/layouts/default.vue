<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { themes, applyTheme, loadSavedTheme, saveTheme } from '~/composables/themes'

const route = useRoute()
const mounted = ref(false)
const currentTheme = ref(themes[0]!)
const showThemePicker = ref(false)

onMounted(() => {
  currentTheme.value = loadSavedTheme()
  requestAnimationFrame(() => {
    mounted.value = true
  })
})

// Sidebar nav. Order reflects the marketing story:
//  Home → Spaces (the apps) → Operator (the AI inside) → Compare (vs the
//  one-chatbox world) → Ecosystem (Space Store) → SDK (build a Space) →
//  Pricing → Download. Solutions/Enterprise/Learn/Product live in the
//  footer to keep the rail short.
const navItems = [
  { icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z|M9 22V12h6v10', to: '/', label: 'Home' },
  { icon: 'M3 3h7v7H3z|M14 3h7v7h-7z|M14 14h7v7h-7z|M3 14h7v7H3z', to: '/spaces', label: 'Spaces' },
  // Operator = brain-circuit (Lucide). Brain hemisphere with circuit
  // nodes branching to the right — reads as "mind plus computation,"
  // which is exactly what the Operator is. Decorative end-dots are
  // dropped because they vanish at 20px anyway.
  { icon: 'M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z|M9 13a4.5 4.5 0 0 0 3-4|M6.003 5.125A3 3 0 0 0 6.401 6.5|M3.477 10.896a4 4 0 0 1 .585-.396|M6 18a4 4 0 0 1-1.967-.516|M12 13h4|M12 18h6a2 2 0 0 1 2 2v1|M12 8h8|M16 8V5a2 2 0 0 1 2-2', to: '/operator', label: 'Operator' },
  { icon: 'M9 9h6v6H9z|M3 3v4|M3 3h4|M21 3v4|M21 3h-4|M3 21v-4|M3 21h4|M21 21v-4|M21 21h-4', to: '/compare', label: 'Compare' },
  { icon: 'M12 12m-1 0a1 1 0 102 0 1 1 0 10-2 0|M12 5m-1 0a1 1 0 102 0 1 1 0 10-2 0|M12 19m-1 0a1 1 0 102 0 1 1 0 10-2 0|M5 12m-1 0a1 1 0 102 0 1 1 0 10-2 0|M19 12m-1 0a1 1 0 102 0 1 1 0 10-2 0', to: '/ecosystem', label: 'Ecosystem' },
  { icon: 'M16 18l6-6-6-6|M8 6l-6 6 6 6', to: '/sdk', label: 'Build' },
  { icon: 'M2 5h20v14H2z|M2 10h20', to: '/pricing', label: 'Pricing' },
  { icon: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4|M7 10l5 5 5-5|M12 15V3', to: '/download', label: 'Download' },
]

function selectTheme(theme: typeof themes[number]) {
  currentTheme.value = theme
  saveTheme(theme)
  showThemePicker.value = false
}

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const footerYear = computed(() => new Date().getFullYear())
</script>

<template>
  <div class="app-shell">
    <aside class="app-sidebar">
      <div class="sidebar-logo">
        <NuxtLink to="/" aria-label="Home">
          <svg viewBox="0 0 533 533" class="logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M266.5 410.156C230.912 410.156 199.106 402.203 171.081 386.297C143.056 370.39 121.036 348.519 105.022 320.684C89.0072 292.848 81 261.256 81 225.909C81 190.12 89.0072 158.308 105.022 130.472C121.036 102.636 143.056 80.7655 171.081 64.8593C199.106 48.9531 230.912 41 266.5 41C302.087 41 333.671 48.9531 361.252 64.8593C389.277 80.7655 411.297 102.636 427.311 130.472C443.326 158.308 451.555 190.12 452 225.909C452 261.256 443.77 292.848 427.311 320.684C411.297 348.519 389.277 370.39 361.252 386.297C333.671 402.203 302.087 410.156 266.5 410.156ZM266.5 363.763C292.301 363.763 315.433 357.798 335.896 345.868C356.359 333.939 372.373 317.591 383.939 296.824C395.505 276.058 401.288 252.42 401.288 225.909C401.288 199.399 395.505 175.761 383.939 154.994C372.373 133.786 356.359 117.217 335.896 105.287C315.433 93.3579 292.301 87.393 266.5 87.393C240.699 87.393 217.567 93.3579 197.104 105.287C176.641 117.217 160.405 133.786 148.394 154.994C136.828 175.761 131.045 199.399 131.045 225.909C131.045 252.42 136.828 276.058 148.394 296.824C160.405 317.591 176.641 333.939 197.104 345.868C217.567 357.798 240.699 363.763 266.5 363.763Z" :fill="currentTheme.accent"/>
            <path d="M378.22 451.578C393.077 451.578 405.121 460.85 405.121 472.289C405.121 483.727 393.077 493 378.22 493H160.945C146.089 493 134.044 483.727 134.044 472.289C134.044 460.85 146.089 451.578 160.945 451.578H378.22Z" :fill="currentTheme.accent"/>
          </svg>
        </NuxtLink>
      </div>

      <nav class="sidebar-nav">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="sidebar-link"
          :class="{ active: isActive(item.to) }"
          :title="item.label"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path v-for="(d, i) in item.icon.split('|')" :key="i" :d="d" />
          </svg>
        </NuxtLink>
      </nav>

      <div class="sidebar-spacer"></div>

      <div class="sidebar-bottom">
        <button class="sidebar-link" @click="showThemePicker = !showThemePicker" title="Theme">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
        <div v-if="showThemePicker" class="theme-picker">
          <button
            v-for="theme in themes"
            :key="theme.id"
            class="theme-option"
            :class="{ selected: theme.id === currentTheme.id }"
            @click="selectTheme(theme)"
          >
            <span class="theme-swatch" :style="{ background: theme.accent }" />
            <span>{{ theme.name }}</span>
          </button>
        </div>

        <NuxtLink to="/about" class="sidebar-link" :class="{ active: isActive('/about') }" title="About">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        </NuxtLink>

        <!-- Auth lives at my.lisaos.dev now. The /login server
             redirect remains for any external links pointing at the
             old URL, but the in-page Sign In button skips the bounce
             and goes directly to the unified portal. -->
        <a href="https://my.lisaos.dev/login" class="sidebar-link" title="Sign In" rel="noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
        </a>
      </div>
    </aside>

    <main class="app-main">
      <slot />
      <footer v-if="mounted" class="site-footer">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="https://www.youtube.com/watch?v=AGZiLMGdCE0" target="_blank" rel="noreferrer" class="footer-brand-link" aria-label="Watch the demo on YouTube">
              <svg viewBox="0 0 931 146" class="footer-logo-full" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Construct">
                <path d="M829.819 107.23C822.987 107.23 816.865 105.629 811.451 102.428C806.166 99.2265 801.977 94.8727 798.883 89.3663C795.789 83.7319 794.243 77.3291 794.243 70.1581V18.2478C794.243 16.0709 794.887 14.2781 796.176 12.8695C797.594 11.4609 799.399 10.7566 801.59 10.7566C803.781 10.7566 805.586 11.4609 807.004 12.8695C808.422 14.2781 809.131 16.0709 809.131 18.2478V70.1581C809.131 76.6889 811.064 82.0672 814.931 86.293C818.798 90.3907 823.761 92.4396 829.819 92.4396H835.039C837.102 92.4396 838.777 93.1439 840.066 94.5525C841.355 95.9611 842 97.7539 842 99.9308C842 102.108 841.227 103.901 839.68 105.309C838.133 106.59 836.199 107.23 833.879 107.23H829.819ZM781.675 18.8721C779.741 18.8721 778.13 18.2958 776.841 17.1433C775.552 15.8628 774.908 14.3261 774.908 12.5334C774.908 10.6125 775.552 9.07589 776.841 7.92339C778.13 6.64285 779.741 6.00257 781.675 6.00257H830.979C832.913 6.00257 834.524 6.64285 835.813 7.92339C837.102 9.07589 837.746 10.6125 837.746 12.5334C837.746 14.3261 837.102 15.8628 835.813 17.1433C834.524 18.2958 832.913 18.8721 830.979 18.8721H781.675Z" :fill="currentTheme.accent"/>
                <path d="M735.549 108.491C725.366 108.491 716.279 106.186 708.287 101.576C700.424 96.8375 694.172 90.4348 689.532 82.3673C685.021 74.2999 682.765 65.208 682.765 55.0916C682.765 44.8472 684.956 35.6913 689.339 27.6238C693.721 19.5564 699.715 13.2177 707.32 8.60769C714.925 3.86966 723.69 1.50064 733.616 1.50064C741.478 1.50064 748.697 3.0373 755.271 6.11063C761.973 9.18394 767.838 13.7939 772.866 19.9405C774.283 21.4772 774.799 23.1419 774.412 24.9347C774.026 26.5994 772.93 28.072 771.125 29.3526C769.708 30.377 768.096 30.7612 766.292 30.5051C764.616 30.1209 763.134 29.1605 761.845 27.6238C754.368 19.1722 744.959 14.9464 733.616 14.9464C726.397 14.9464 720.017 16.6752 714.474 20.1326C709.06 23.5901 704.807 28.3281 701.713 34.3467C698.748 40.3653 697.266 47.2803 697.266 55.0916C697.266 62.7749 698.877 69.6259 702.1 75.6444C705.322 81.663 709.834 86.401 715.634 89.8585C721.435 93.316 728.073 95.0448 735.549 95.0448C740.576 95.0448 745.152 94.4045 749.277 93.1239C753.531 91.7153 757.269 89.6024 760.491 86.7852C762.038 85.5047 763.649 84.8004 765.325 84.6723C767.001 84.5443 768.547 85.0565 769.965 86.209C771.512 87.6176 772.35 89.2182 772.479 91.011C772.737 92.8038 772.157 94.3405 770.739 95.621C761.329 104.201 749.599 108.491 735.549 108.491Z" :fill="currentTheme.accent"/>
                <path d="M621.956 107.722C612.805 107.722 604.619 105.865 597.401 102.152C590.183 98.3102 584.447 92.7398 580.193 85.4406C576.068 78.1415 574.006 69.2417 574.006 58.7412V8.79978C574.006 6.7509 574.715 5.02216 576.133 3.61356C577.551 2.20495 579.291 1.50064 581.353 1.50064C583.544 1.50064 585.349 2.20495 586.767 3.61356C588.185 5.02216 588.894 6.7509 588.894 8.79978V58.7412C588.894 66.6806 590.376 73.2114 593.341 78.3336C596.434 83.4558 600.559 87.2974 605.715 89.8585C611 92.4196 616.929 93.7002 623.503 93.7002C629.819 93.7002 635.491 92.4837 640.518 90.0506C645.674 87.6176 649.734 84.2881 652.699 80.0623C655.664 75.8365 657.146 71.0345 657.146 65.6562H667.78C667.393 73.7236 665.138 80.9587 661.013 87.3615C657.017 93.6361 651.603 98.6303 644.772 102.344C637.94 105.929 630.335 107.722 621.956 107.722ZM664.493 106.57C662.302 106.57 660.497 105.929 659.079 104.649C657.79 103.24 657.146 101.383 657.146 99.0785V8.79978C657.146 6.62285 657.79 4.8941 659.079 3.61356C660.497 2.20495 662.302 1.50064 664.493 1.50064C666.685 1.50064 668.489 2.20495 669.907 3.61356C671.325 4.8941 672.034 6.62285 672.034 8.79978V99.0785C672.034 101.383 671.325 103.24 669.907 104.649C668.489 105.929 666.685 106.57 664.493 106.57Z" :fill="currentTheme.accent"/>
                <path d="M503.155 42.9904C503.542 35.051 505.604 27.944 509.342 21.6693C513.209 15.3946 518.172 10.4645 524.23 6.87895C530.418 3.29341 537.249 1.50064 544.725 1.50064C550.655 1.50064 555.231 2.333 558.453 3.99772C561.676 5.66243 562.9 8.09547 562.127 11.2968C561.611 13.2177 560.709 14.4982 559.42 15.1385C558.26 15.7788 556.778 16.0349 554.973 15.9068C553.297 15.7788 551.364 15.6507 549.172 15.5227C541.954 14.8824 535.509 15.6507 529.838 17.8276C524.295 19.8765 519.848 23.0779 516.496 27.4318C513.274 31.7856 511.663 36.9719 511.663 42.9904H503.155ZM504.315 107.722C501.995 107.722 500.191 107.082 498.902 105.801C497.613 104.521 496.968 102.728 496.968 100.423V9.95227C496.968 7.64728 497.613 5.85451 498.902 4.57397C500.191 3.29341 501.995 2.65313 504.315 2.65313C506.636 2.65313 508.44 3.29341 509.729 4.57397C511.018 5.85451 511.663 7.64728 511.663 9.95227V100.423C511.663 102.728 511.018 104.521 509.729 105.801C508.44 107.082 506.636 107.722 504.315 107.722Z" :fill="currentTheme.accent"/>
                <path d="M473.331 107.23C466.5 107.23 460.377 105.629 454.963 102.428C449.678 99.2265 445.489 94.8727 442.395 89.3663C439.302 83.7319 437.755 77.3291 437.755 70.1581V15.2465C437.755 13.0696 438.399 11.2768 439.688 9.86823C441.106 8.45962 442.911 7.75532 445.102 7.75532C447.293 7.75532 449.098 8.45962 450.516 9.86823C451.934 11.2768 452.643 13.0696 452.643 15.2465V70.1581C452.643 76.6889 454.576 82.0672 458.443 86.293C462.31 90.3907 467.273 92.4396 473.331 92.4396H478.552C480.614 92.4396 482.29 93.1439 483.579 94.5525C484.868 95.9611 485.512 97.7539 485.512 99.9308C485.512 102.108 484.739 103.901 483.192 105.309C481.645 106.59 479.712 107.23 477.392 107.23H473.331ZM425.187 18.8721C423.254 18.8721 421.642 18.2958 420.353 17.1433C419.064 15.8628 418.42 14.3261 418.42 12.5334C418.42 10.6125 419.064 9.07589 420.353 7.92339C421.642 6.64285 423.254 6.00257 425.187 6.00257H474.491C476.425 6.00257 478.036 6.64285 479.325 7.92339C480.614 9.07589 481.259 10.6125 481.259 12.5334C481.259 14.3261 480.614 15.8628 479.325 17.1433C478.036 18.2958 476.425 18.8721 474.491 18.8721H425.187Z" :fill="currentTheme.accent"/>
                <path d="M368.873 108.491C361.268 108.491 353.728 107.21 346.251 104.649C338.775 102.088 332.717 98.2461 328.077 93.1239C326.659 91.5873 326.079 89.8585 326.336 87.9377C326.594 86.0169 327.561 84.3522 329.237 82.9436C331.041 81.663 332.91 81.1508 334.844 81.4069C336.777 81.663 338.389 82.4954 339.678 83.904C342.771 87.4895 346.831 90.2427 351.859 92.1635C357.015 94.0843 362.686 95.0448 368.873 95.0448C378.412 95.0448 385.308 93.4441 389.562 90.2427C393.815 86.9133 396.007 82.9436 396.136 78.3336C396.136 73.7236 393.944 69.946 389.562 67.0007C385.179 63.9274 377.961 61.5584 367.907 59.8937C354.888 57.8448 345.349 54.2593 339.291 49.1371C333.233 44.0149 330.203 37.9323 330.203 30.8892C330.203 24.3584 331.944 18.9161 335.424 14.5622C338.904 10.2084 343.545 6.94298 349.345 4.76605C355.145 2.58911 361.526 1.50064 368.487 1.50064C377.123 1.50064 384.535 2.97327 390.722 5.91854C397.038 8.8638 402.129 12.8335 405.996 17.8277C407.285 19.4924 407.801 21.2211 407.543 23.0139C407.285 24.8066 406.254 26.2793 404.45 27.4318C402.903 28.3281 401.098 28.6483 399.036 28.3922C397.102 28.008 395.427 27.0476 394.009 25.5109C390.786 21.7973 387.048 19.1082 382.794 17.4435C378.541 15.6507 373.643 14.7543 368.1 14.7543C361.01 14.7543 355.339 16.227 351.085 19.1722C346.831 21.9894 344.705 25.575 344.705 29.9288C344.705 32.8741 345.478 35.4352 347.025 37.6121C348.7 39.7891 351.472 41.7099 355.339 43.3746C359.335 45.0393 364.877 46.4479 371.967 47.6004C381.634 49.1371 389.239 51.4421 394.782 54.5154C400.454 57.4606 404.45 60.9821 406.77 65.0799C409.219 69.0496 410.443 73.4035 410.443 78.1415C410.443 84.1601 408.639 89.4744 405.03 94.0843C401.549 98.5663 396.651 102.088 390.335 104.649C384.148 107.21 376.994 108.491 368.873 108.491Z" :fill="currentTheme.accent"/>
                <path d="M311.22 106.222C309.029 106.222 307.224 105.517 305.806 104.109C304.388 102.7 303.679 100.971 303.679 98.9224V48.981C303.679 41.0416 302.132 34.5108 299.039 29.3886C296.074 24.2664 291.949 20.4248 286.665 17.8637C281.509 15.3026 275.644 14.022 269.07 14.022C262.754 14.022 257.018 15.2385 251.862 17.6716C246.835 20.1046 242.839 23.434 239.874 27.6599C236.909 31.8857 235.427 36.6877 235.427 42.066H224.793C225.051 33.9986 227.242 26.8275 231.367 20.5528C235.491 14.1501 240.97 9.15592 247.801 5.57038C254.633 1.85679 262.238 0 270.617 0C279.768 0 287.953 1.92083 295.172 5.76248C302.39 9.47607 308.062 14.9824 312.187 22.2816C316.44 29.5807 318.567 38.4805 318.567 48.981V98.9224C318.567 100.971 317.858 102.7 316.44 104.109C315.022 105.517 313.282 106.222 311.22 106.222ZM228.08 106.222C225.759 106.222 223.89 105.581 222.473 104.301C221.184 102.892 220.539 101.099 220.539 98.9224V8.64371C220.539 6.33872 221.184 4.54595 222.473 3.2654C223.89 1.85679 225.759 1.15249 228.08 1.15249C230.271 1.15249 232.011 1.85679 233.3 3.2654C234.718 4.54595 235.427 6.33872 235.427 8.64371V98.9224C235.427 101.099 234.718 102.892 233.3 104.301C232.011 105.581 230.271 106.222 228.08 106.222Z" :fill="currentTheme.accent"/>
                <path d="M154.957 106.99C144.645 106.99 135.429 104.685 127.308 100.075C119.188 95.4649 112.807 89.1262 108.167 81.0588C103.526 72.9913 101.206 63.8354 101.206 53.591C101.206 43.2185 103.526 33.9986 108.167 25.9311C112.807 17.8637 119.188 11.5249 127.308 6.91497C135.429 2.30499 144.645 0 154.957 0C165.269 0 174.421 2.30499 182.413 6.91497C190.534 11.5249 196.914 17.8637 201.555 25.9311C206.195 33.9986 208.58 43.2185 208.709 53.591C208.709 63.8354 206.324 72.9913 201.555 81.0588C196.914 89.1262 190.534 95.4649 182.413 100.075C174.421 104.685 165.269 106.99 154.957 106.99ZM154.957 93.5441C162.434 93.5441 169.136 91.8154 175.066 88.3579C180.995 84.9004 185.635 80.1624 188.987 74.1438C192.338 68.1252 194.014 61.2743 194.014 53.591C194.014 45.9077 192.338 39.0568 188.987 33.0382C185.635 26.8915 180.995 22.0895 175.066 18.632C169.136 15.1745 162.434 13.4458 154.957 13.4458C147.481 13.4458 140.778 15.1745 134.849 18.632C128.92 22.0895 124.215 26.8915 120.735 33.0382C117.383 39.0568 115.707 45.9077 115.707 53.591C115.707 61.2743 117.383 68.1252 120.735 74.1438C124.215 80.1624 128.92 84.9004 134.849 88.3579C140.778 91.8154 147.481 93.5441 154.957 93.5441Z" :fill="currentTheme.accent"/>
                <path d="M52.7844 107.506C42.6013 107.506 33.5139 105.201 25.5221 100.591C17.6592 95.8531 11.4076 89.4503 6.76722 81.3829C2.25574 73.3154 0 64.2235 0 54.1072C0 43.8628 2.19129 34.7069 6.57388 26.6394C10.9565 18.572 16.9503 12.2332 24.5554 7.62326C32.1604 2.88523 40.9256 0.516212 50.8509 0.516212C58.7137 0.516212 65.9321 2.05287 72.506 5.1262C79.2088 8.19951 85.0737 12.8095 90.1008 18.9561C91.5187 20.4928 92.0343 22.1575 91.6476 23.9503C91.2609 25.615 90.1652 27.0876 88.3606 28.3682C86.9427 29.3926 85.3315 29.7768 83.5269 29.5206C81.8512 29.1365 80.3689 28.1761 79.0799 26.6394C71.6037 18.1878 62.194 13.962 50.8509 13.962C43.6325 13.962 37.252 15.6907 31.7093 19.1482C26.2955 22.6057 22.0418 27.3437 18.9482 33.3623C15.9835 39.3809 14.5012 46.2958 14.5012 54.1072C14.5012 61.7905 16.1124 68.6414 19.3349 74.66C22.5574 80.6786 27.0689 85.4166 32.8694 88.8741C38.6699 92.3316 45.3082 94.0603 52.7844 94.0603C57.8114 94.0603 62.3874 93.42 66.5122 92.1395C70.7659 90.7309 74.5039 88.618 77.7264 85.8008C79.2732 84.5202 80.8845 83.8159 82.5602 83.6879C84.2359 83.5598 85.7827 84.072 87.2005 85.2245C88.7473 86.6331 89.5852 88.2338 89.7141 90.0266C89.9719 91.8194 89.3918 93.356 87.9739 94.6366C78.5643 103.216 66.8344 107.506 52.7844 107.506Z" :fill="currentTheme.accent"/>
                <path d="M187.33 118.995C191.635 118.995 195.125 121.682 195.125 124.997C195.125 128.313 191.635 131 187.33 131H124.372C120.067 131 116.576 128.313 116.576 124.997C116.576 121.682 120.067 118.995 124.372 118.995H187.33Z" :fill="currentTheme.accent"/>
              </svg>
            </a>
            <p class="footer-copy">The operating system for the age of AI. There's a Space for that.</p>
            <div class="footer-social">
              <a href="https://github.com/construct-space" target="_blank" rel="noreferrer" aria-label="GitHub" class="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
              </a>
              <a href="https://x.com/constructspaces" target="_blank" rel="noreferrer" aria-label="X" class="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com/constructspaces" target="_blank" rel="noreferrer" aria-label="Instagram" class="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com/constructspaces" target="_blank" rel="noreferrer" aria-label="Facebook" class="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <div class="footer-heading">Product</div>
            <NuxtLink to="/product">Overview</NuxtLink>
            <NuxtLink to="/spaces">Spaces</NuxtLink>
            <NuxtLink to="/operator">Operator</NuxtLink>
            <NuxtLink to="/marketplace">Space Store</NuxtLink>
            <NuxtLink to="/sdk">SDK</NuxtLink>
            <NuxtLink to="/pricing">Pricing</NuxtLink>
            <NuxtLink to="/compare">Compare</NuxtLink>
          </div>
          <div>
            <div class="footer-heading">Use Construct</div>
            <NuxtLink to="/solutions">Solutions</NuxtLink>
            <NuxtLink to="/enterprise">Enterprise</NuxtLink>
            <NuxtLink to="/security">Security</NuxtLink>
            <NuxtLink to="/learn">Learn</NuxtLink>
            <NuxtLink to="/ecosystem">Ecosystem</NuxtLink>
            <NuxtLink to="/download">Download</NuxtLink>
          </div>
          <div>
            <div class="footer-heading">Company</div>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <NuxtLink to="/careers">Careers</NuxtLink>
            <NuxtLink to="/changelog">Changelog</NuxtLink>
            <NuxtLink to="/presentation">Presentations</NuxtLink>
            <a href="https://my.lisaos.dev" target="_blank" rel="noreferrer">Developer Portal</a>
            <NuxtLink to="/terms">Terms</NuxtLink>
            <NuxtLink to="/privacy">Privacy</NuxtLink>
          </div>
        </div>
        <div class="footer-bottom">© {{ footerYear }} Construct. All rights reserved.</div>
      </footer>
    </main>
  </div>
</template>

<style>
/* Layout-level styles. Page-level shared classes (.page-section, .card,
   etc.) live in assets/css/main.css. Sidebar + footer are owned here. */

.app-shell {
  display: flex;
  min-height: 100vh;
}

/* Sidebar */
.app-sidebar {
  width: 64px;
  position: fixed;
  top: 0; left: 0; bottom: 0;
  border-right: 1px solid var(--app-border);
  background: var(--app-canvas-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  z-index: 50;
}

.sidebar-logo { margin-bottom: 20px; }
.logo-svg { width: 28px; height: 28px; }

.sidebar-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
}

.sidebar-link {
  width: 44px; height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: var(--app-muted);
  text-decoration: none;
  transition: all 0.15s;
  cursor: pointer;
  border: none;
  background: none;
}

.sidebar-link:hover {
  background: var(--app-card-hover);
  color: var(--app-foreground);
}

.sidebar-link.active {
  color: var(--app-accent-text, #e11d48);
  background: color-mix(in srgb, var(--app-accent) 10%, transparent);
}

.sidebar-spacer { flex: 1; }

.sidebar-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  position: relative;
}

/* Theme picker */
.theme-picker {
  position: absolute;
  left: 60px;
  bottom: 0;
  background: var(--app-card-bg);
  border: 1px solid var(--app-border);
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 100;
  min-width: 160px;
}

.theme-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 13px;
  color: var(--app-foreground);
  text-align: left;
  font-family: inherit;
}

.theme-option:hover { background: var(--app-card-hover); }
.theme-option.selected { background: color-mix(in srgb, var(--app-accent) 10%, transparent); color: var(--app-accent-text, #e11d48); }

.theme-swatch {
  width: 14px; height: 14px;
  border-radius: 50%;
  border: 1px solid var(--app-border);
  flex-shrink: 0;
}

/* Main */
.app-main {
  flex: 1;
  /* Without this, the flex item refuses to shrink below its content's
     min-content width — a wide child (e.g. the hero image) then forces
     the whole page wider than the viewport and clips on mobile. */
  min-width: 0;
  margin-left: 64px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Footer */
.site-footer {
  border-top: 1px solid var(--app-border);
  background: var(--app-canvas-bg);
  padding: 48px 24px 24px;
  contain: layout style;
}

.footer-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 32px;
}

.footer-brand { display: flex; flex-direction: column; gap: 14px; }
.footer-brand-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--app-foreground);
}
.footer-logo-full {
  height: 26px;
  width: auto;
  display: block;
}
.footer-copy { font-size: 13px; color: var(--app-muted); max-width: 320px; line-height: 1.55; }
.footer-social {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 4px;
}
.footer-social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--app-muted);
  transition: color 0.15s;
  line-height: 0;
}
.footer-social-link svg { display: block; }
.footer-social-link:hover { color: var(--app-accent-text, #e11d48); }
.footer-heading { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--app-muted); margin-bottom: 10px; }
/* padding (not margin) keeps the rhythm while giving each link a ~28px
   tap target with spacing — fixes the "touch targets too small" audit. */
.footer-grid a { display: block; font-size: 13px; color: var(--app-muted); text-decoration: none; padding: 6px 0; transition: color 0.15s; }
.footer-grid a:hover { color: var(--app-accent-text, #e11d48); }

.footer-bottom {
  max-width: 1000px;
  margin: 32px auto 0;
  padding-top: 24px;
  border-top: 1px solid var(--app-border);
  font-size: 13px;
  color: var(--app-muted);
}

@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .app-sidebar { width: 52px; }
  .app-main { margin-left: 52px; }
  .sidebar-link { width: 36px; height: 36px; }
  .logo-svg { width: 24px; height: 24px; }
}
</style>
