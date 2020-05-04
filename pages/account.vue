<template>
  <div>
    <h1>Account parent</h1>
    <nuxt-link to="/account/address">Address</nuxt-link>
    <nuxt-link to="/account/change-password">Change Password</nuxt-link>
    <nuxt-link to="/account/order-history">Order History</nuxt-link>
    <nuxt-link to="/account">Personal</nuxt-link>
    <nuxt-child />
  </div>
</template>