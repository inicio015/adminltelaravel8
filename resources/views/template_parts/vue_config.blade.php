<div class="wrapper">
  <!-- Preloader -->
  <div class="preloader flex-column justify-content-center align-items-center">
      <img class="animation__shake" src="{{ asset('img/AdminLTELogo.png') }}"  height="60" width="60">
  </div>
  <div id="app">
      @include('template_parts.nav')
    
      @include('template_parts.sidebar')
      <div class="content-wrapper">
          <!-- Content Header (Page header) -->
          <div id="app">
            <div class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1 class="m-0">@yield('title_wrapper')</h1>
                  </div><!-- /.col -->
                  <div class="col-sm-6">
                    @yield('navigation_list')
                  </div><!-- /.col -->
                </div><!-- /.row -->
              </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->
            @yield('content')
          </div>
      </div>
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.1.0
    </div>
  </footer>
</div>