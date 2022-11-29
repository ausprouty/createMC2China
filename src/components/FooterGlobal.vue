<template>
  <div class="languages" id="languages">
    <img class="languages" src="@/assets/images/OtherLanguagesTop.png" />
  </div>
  <table class="social">
    <tbody>
      <tr>
        <td class="social">
          <a
            id="Return2"
            href="#"
            onclick="goToPageAndSetReturn('..//index.html', '#Return2');"
          >
            <img class="social" src="@/assets/images/languages.png" />
          </a>
        </td>
        <td class="social">
          <a
            id="Return3"
            href="#"
            onclick="goToPageAndSetReturn('../pages/apk.html', '#Return3');"
          >
            <img class="social" src="@/assets/images/android.png" />
          </a>
        </td>
        <td class="social">
          <a
            href="javascript:void(0);"
            onclick="shareLesson('Assurance of Salvation: ')"
          >
            <img class="social" src="@/assets/images/Share.png" />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="footer">
    <p class="footer">MC2</p>
    <p class="footer">
      <a
        class="no_underline"
        target="_blank"
        href="https://GlobalChurchMovements.org"
        >GlobalChurchMovements.org</a
      >
    </p>
  </div>
</template>
