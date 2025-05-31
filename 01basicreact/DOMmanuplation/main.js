function Render(reactElement, container){
    const domElement = document.createElement(element.type);

    domElement.innerHTML = element.children;
    domElement.setAttribute('href',element.property.href);
    domElement.setAttribute('target',element.property.target);
     
    container.appendChild(domElement);
}

const element = {
    type: 'a',
    property: {
        href: 'https://pornhub.com',
        target: '_blank'
    },
    children: 'Click me'
}

const mainContainer = document.getElementById('root');

Render(element,mainContainer);