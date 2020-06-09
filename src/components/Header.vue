<template>
    <div id="header">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="/">
                <img src="../assets/logo.png" width="45" height="45" class="d-inline-block align-center" alt="logo">
                Blog SD Guru Tunas Bangsa
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">Beranda</b-nav-item>
                    <b-nav-item to="/matapelajaran">Mata Pelajaran</b-nav-item>
                    <b-nav-item to="/profil">Profil</b-nav-item>
                    <b-nav-item to="/kegiatan">Kegiatan</b-nav-item>
                    <b-nav-item to="/kontak">Kontak</b-nav-item>
                </b-navbar-nav>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "header"
    };
</script>

<style scoped>
.navbar {
    padding: 15px 10px;
    background: #ffffff;
    border: none;
    border-radius: 6px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
</style>