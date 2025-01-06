import Facebook from './icons/vecteezy_facebook-logo-png-facebook-icon-transparent-png_18930476.png'

import Whatsapp from './icons/vecteezy_whatsapp-logo-png-whatsapp-icon-png-whatsapp-transparent_18930748.png'

import Call from './icons/vecteezy_free-logo-github_53066802.png'

export default function Footer() {
  return (
    <div className="flex gap-5 mt-[30px]
    text-slate-50 items-center justify-end mr-10">
      <a href="http://www.facebook.com/salisspro">
        <img
          className='w-[4rem]'
          src={Facebook} alt="" title='Facebook' />
      </a>
      <a href="https://api.whatsapp.com/send?phone=+2349125303046">
        <img
          className='w-[4rem]'
          src={Whatsapp} alt="" title='WhatsApp' />
      </a>
      <a href="https://github.com/Salisspro">
        <img
          className='w-[3rem]'
          src={Call} alt="" title='GitHub' />
      </a>
    </div>
  )
}
