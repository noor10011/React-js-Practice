import React, { useTransition } from 'react'

const UseTransitionHook = () => {
  const [pending,startTransition] = useTransition();
  const handleClick = () => {
    startTransition(async()=>{
      await new Promise (res => setTimeout(res,3000))
    })
  }
  return (
    <div>
      <h1>Use Of UseTransition Hook in React JS</h1>
      { pending ? <img style={{width:"100px"}} src="https://www.bing.com/ck/a?!&&p=06cbaebf1921dea2d044b44a62e9ca9245892f05d773c1a593f01e644ab8a93dJmltdHM9MTc1NTQ3NTIwMA&ptn=3&ver=2&hsh=4&fclid=18859496-08ae-6d09-14db-801709756cc6&u=a1L2ltYWdlcy9zZWFyY2g_cT1zcGlubmVyK2dpZiZpZD1DMkZBRDkwOTlCMjA2NkEzRTQwMkM4ODcwQTc1MUFDMzdGNDBDMEQ0JkZPUk09SUFDRklS&ntb=1" alt='' srcSet=''/> : null}
      <button disabled={pending} onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseTransitionHook
