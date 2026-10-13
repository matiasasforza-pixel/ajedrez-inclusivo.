const {defineConfig}=require('@playwright/test');
module.exports=defineConfig({testDir:'./tests',timeout:60000,workers:1,use:{baseURL:process.env.TEST_URL||'http://127.0.0.1:4173',headless:true,launchOptions:process.platform==='win32'?{channel:'msedge'}:{}},webServer:process.env.TEST_URL?undefined:{command:'node scripts/serve.cjs',url:'http://127.0.0.1:4173',reuseExistingServer:true}});
