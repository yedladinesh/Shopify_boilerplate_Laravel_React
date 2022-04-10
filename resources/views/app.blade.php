<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
  <script src="{{ asset('js/app.js') }}" defer></script>
  @inertiaHead
</head>

<body>
  <div class="app-wrapper">
    <div class="app-content">
      <main role="main">
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
          <!-- <div class="app-main"> -->
            @inertia

            <input type="hidden" value="{{ env('SHOPIFY_API_KEY') }}" id="apiKey" />
            <input type="hidden" value="{{ request('host') }}" id="host" />
            <input type="hidden" value="{{ Auth::user()->name }}" id="shopOrigin" />
          <!-- </div> -->
        </div>
      </main>
    </div>
  </div>


</body>

</html>