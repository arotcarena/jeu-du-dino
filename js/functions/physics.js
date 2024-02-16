


/**
 * 
 * @param {HTMLElement} elt1 
 * @param {HTMLElement} elt2 
 * @param {number} margin  (marge de tolérance : en pixels)
 */
export function detectImpact(elt1, elt2, margin) {
    const left1 = elt1.getBoundingClientRect().left;
    const width1 = elt1.getBoundingClientRect().width;
    const top1 = elt1.getBoundingClientRect().top;
    const height1 = elt1.getBoundingClientRect().height;

    
    const left2 = elt2.getBoundingClientRect().left;
    const width2 = elt2.getBoundingClientRect().width;
    const top2 = elt2.getBoundingClientRect().top;
    const height2 = elt2.getBoundingClientRect().height;

    const horizontal = (left1 >= left2 + margin) && (left1 <= left2 + width2 - margin);
    const horizontalReverse = (left2 >= left1+ margin) && (left2 <= left1+ width1 - margin);

    const vertical = (top1 >= top2 + margin) && (top1 <= top2 + height2 - margin);
    const verticalReverse = (top2 >= top1 + margin) && (top2 <= top1 + height1 - margin);

    if((horizontal || horizontalReverse) && (vertical || verticalReverse)) {
        return true;
    }
}

