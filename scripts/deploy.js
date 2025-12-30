#!/usr/bin/env node

/**
 * 一鍵部署到 Vercel 腳本
 * 使用方式: npm run deploy
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function exec(command, options = {}) {
  try {
    return execSync(command, { 
      stdio: 'inherit', 
      encoding: 'utf8',
      ...options 
    });
  } catch (error) {
    console.error(`\n❌ 執行失敗: ${command}`);
    throw error;
  }
}

async function main() {
  console.log('\n🚀 一鍵部署到 Vercel\n');
  console.log('========================================\n');

  // 檢查 Git
  try {
    execSync('git status', { stdio: 'ignore' });
  } catch {
    console.error('❌ 錯誤: 當前目錄不是 Git 倉庫');
    console.log('\n提示: 請先初始化 Git 倉庫');
    process.exit(1);
  }

  // 顯示當前更改
  console.log('📋 當前更改:');
  try {
    execSync('git status --short', { stdio: 'inherit' });
  } catch {
    // 忽略錯誤
  }
  console.log('');

  // 檢查是否有更改
  let hasChanges = false;
  try {
    execSync('git diff --quiet HEAD', { stdio: 'ignore' });
    execSync('git diff --cached --quiet', { stdio: 'ignore' });
  } catch {
    hasChanges = true;
  }

  if (hasChanges) {
    // 添加所有更改
    console.log('📦 步驟 1/3: 添加所有更改...');
    exec('git add .');
    console.log('✅ 文件已添加\n');

    // 提交更改
    console.log('💾 步驟 2/3: 提交更改...');
    const commitMsg = await question('請輸入提交訊息（直接按 Enter 使用默認訊息）: ');
    const finalMsg = commitMsg.trim() || `更新：自動部署到 Vercel - ${new Date().toLocaleString('zh-TW')}`;
    
    try {
      exec(`git commit -m "${finalMsg}"`);
      console.log('✅ 更改已提交\n');
    } catch {
      console.log('⚠️  提交失敗，可能沒有更改需要提交\n');
    }
  } else {
    console.log('ℹ️  沒有需要提交的更改，直接推送\n');
  }

  // 推送到 GitHub
  console.log('🚀 步驟 3/3: 推送到 GitHub...');
  try {
    exec('git push');
    console.log('\n✅ 代碼已推送到 GitHub\n');
  } catch {
    console.error('\n❌ 推送失敗');
    console.log('\n提示: 請檢查');
    console.log('  1. 是否已設置遠程倉庫: git remote -v');
    console.log('  2. 是否有推送權限');
    console.log('  3. 網絡連接是否正常\n');
    process.exit(1);
  }

  console.log('========================================');
  console.log('✅ 部署流程完成');
  console.log('========================================\n');
  console.log('ℹ️  Vercel 會自動檢測更改並開始部署');
  console.log('ℹ️  通常需要 1-3 分鐘完成部署\n');
  console.log('📊 查看部署狀態:');
  console.log('  - Vercel Dashboard: https://vercel.com/dashboard');
  console.log('  - GitHub: https://github.com/您的用戶名/您的倉庫\n');

  rl.close();
}

main().catch(error => {
  console.error('\n❌ 發生錯誤:', error.message);
  rl.close();
  process.exit(1);
});

