import asyncProvide from 'ym:provide'
import loader from 'bem:loader__js'
import cfg from 'bem:jquery__config'

doProvide = preserveGlobal => {
    asyncProvide(preserveGlobal? jQuery : jQuery.noConflict(true));
}

typeof jQuery !== 'undefined'?
    doProvide(true) :
    loader(cfg.url, doProvide);
