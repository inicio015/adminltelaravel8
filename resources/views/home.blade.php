@extends('layouts.app')

@section('content')
<!-- Main content -->
@section('title_wrapper', 'Home')
@section('navigation_list')
    <ol class="breadcrumb float-sm-right">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active">Dashboard v1</li>
    </ol>
@endsection
<router-view ></router-view>

<!-- /.content -->
@endsection
