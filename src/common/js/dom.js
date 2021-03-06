/**
 * Created by admin on 2017/8/8.
 */
export function addClass (el, className) {
    if (hasClass(el, className)) return
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

export function hasClass (el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(^|\\s)')
    return reg.test(className)
}

export function getData (el, name, val) {
    let prefix = 'data-'
    name = prefix + name
    if (val) {
        el.setAttribute(name, val)
    } else {
        return el.getAttribute(name)
    }
}
