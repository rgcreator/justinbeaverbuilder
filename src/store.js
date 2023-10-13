import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
  decals: ['justin beaver 2 (2).png', 'eekhoorn marijnissen.png', 'Geert Wilhout.png', 'Frans Timmerkonijns.jpg', 'Terry Boadam.png'],
  color: '#EFBD4E',
  decal: 'justin beaver 2 (2)'
})

export { state }
