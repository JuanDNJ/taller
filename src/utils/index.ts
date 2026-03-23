const queryElement = (selector: string): HTMLElement => {
    const element = document.querySelector(selector);
    if (!element) {
        throw new Error(`Element with selector "${selector}" not found.`);
    }
    return element as HTMLElement;
}

const queryAllElements = (selector: string): HTMLElement[] => {
    const elements = document.querySelectorAll(selector);   
    if (elements.length === 0) {
        throw new Error(`No elements found with selector "${selector}".`);
    }   
    return Array.from(elements) as HTMLElement[];
}

export {
    queryElement,
    queryAllElements
}