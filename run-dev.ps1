$server = Start-Process -NoNewWindow -PassThru -FilePath "bun" -ArgumentList "run dev" -WorkingDirectory "packages/server"
$client = Start-Process -NoNewWindow -PassThru -FilePath "bun" -ArgumentList "run dev" -WorkingDirectory "packages/client/react-app"

Write-Host "Server running (PID: $($server.Id))"
Write-Host "Client running (PID: $($client.Id))"

# Wait for any process to exit
Wait-Process -Id $server.Id, $client.Id -Any

Write-Host "One of the processes has exited. Cleaning up..."
Stop-Process -Id $server.Id -ErrorAction SilentlyContinue
Stop-Process -Id $client.Id -ErrorAction SilentlyContinue
