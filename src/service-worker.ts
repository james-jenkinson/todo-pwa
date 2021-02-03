import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute'

const cacheName = self.__WB_MANIFEST
precacheAndRoute(cacheName)
