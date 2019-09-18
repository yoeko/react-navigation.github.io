// todo: should get the version somewhere, maybe within the page html,
// and match the appropriate version of react-navigation/stack/tabs/drawer
// based on that
function getSnackUrl(options) {
  let label = options.label || document.title;
  let code = options.code;

  return (
    'https://snack.expo.io?name=' +
    encodeURIComponent(label) +
    '&description=' +
    encodeURIComponent(window.location.href) +
    '&code=' +
    encodeURIComponent(code) +
    '&dependencies=' +
    encodeURIComponent(
      [
        'react-navigation',
        'react-navigation-stack',
        'react-navigation-tabs',
        'react-navigation-drawer',
      ].join(',')
    )
  );
}

function getCodeForTemplateId(templateId) {
  let template = document.querySelector(`.template.${templateId}`);
  if (template) {
    return template.innerText;
  } else {
    console.warn(`Unable to find template with className ${templateId}`);
  }
}

function findNearestPreElement(node) {
  let nextElement = node.nextElementSibling;
  if (!nextElement && node.parentElement.tagName === 'P') {
    nextElement = node.parentElement.nextElementSibling;
  }

  while (nextElement) {
    if (
      nextElement.tagName === 'PRE' &&
      nextElement.firstChild &&
      nextElement.firstChild.tagName === 'CODE' &&
      nextElement.firstChild.className.includes('language-js')
    ) {
      return nextElement;
    } else {
      nextElement = nextElement.nextElementSibling;
    }
  }
}

let openIcon =
  '<svg width="14px" height="14px" viewBox="0 0 16 16" style="vertical-align: -1px"><g stroke="none" stroke-width="1" fill="none"><polyline stroke="currentColor" points="8.5 0.5 15.5 0.5 15.5 7.5"></polyline><path d="M8,8 L15.0710678,0.928932188" stroke="currentColor"></path><polyline stroke="currentColor" points="9.06944444 3.5 1.5 3.5 1.5 14.5 12.5 14.5 12.5 6.93055556"></polyline></g></svg>';

function appendSnackLink() {
  let samples = document.querySelectorAll('samp');

  if (!samples.length) {
    return;
  }

  samples.forEach(samp => {
    let pre = findNearestPreElement(samp);

    if (!pre) {
      console.log(
        `<pre> tag with <code> child not found for <samp> element ${samp.innerText}`
      );
      return;
    }

    let code;
    let label = samp.innerText;
    let templateId = samp.getAttribute('template-id');

    let link = document.createElement('a');
    link.className = 'snack-sample-link';
    link.dataset.snack = true;
    link.target = '_blank';

    if (label) {
      link.innerHTML = `Try the "${label}" example on Snack ${openIcon}`;
    } else {
      link.innerHTML = `Try this example on Snack ${openIcon}`;
    }

    if (templateId) {
      code = getCodeForTemplateId(templateId);
    } else {
      code = pre.innerText;
    }

    // Add the href and append the link element if we have some code
    if (code) {
      let href = getSnackUrl({ code, label });

      if (link.href === href) {
        return;
      }

      link.href = href;
      pre.insertAdjacentElement('afterend', link);
    }

    // Don't try to add the link more than once!
    samp.remove();
  });
}

function transformExistingSnackLinks() {
  document.querySelectorAll('a[href*="#template"]').forEach(a => {
    let urlParts = a.href.split('#template/');
    let templateId = urlParts[urlParts.length - 1];
    let code = getCodeForTemplateId(templateId);
    a.href = getSnackUrl({ code });
  });
}

appendSnackLink();
transformExistingSnackLinks();

var mutationObserver = new MutationObserver(mutations => {
  mutations.forEach(appendSnackLink);
  mutations.forEach(transformExistingSnackLinks);
});

mutationObserver.observe(document.documentElement, {
  childList: true,
  subtree: true,
});
