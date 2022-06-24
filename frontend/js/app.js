let accounts;
let currentLanguage = (localStorage.getItem("language") === null) ? "pt" : localStorage.getItem("language");

// English-Portuguese convertion
function updatePageLanguage() {
  //
  const another_force_sync = 0;
  // All HTML elements  
  const headerMenuAbout = document.getElementById("aboutMenu");
  const headerMenuRoadmap = document.getElementById("roadmapMenu");
  const headerMenuTeam = document.getElementById("teamMenu");
  const headerMenuFAQ = document.getElementById("faqMenu");

  const aboutH1 = document.getElementById("aboutH1");
  const roadmapH1 = document.getElementById("roadmapH1");
  const teamH1 = document.getElementById("teamH1");
  const faqH1 = document.getElementById("faqH1");

  const aboutP = document.getElementById("aboutP");
  const roadmapP = document.getElementById("roadmapP");
  // const teamP = document.getElementById("teamP");
  const faqP = document.getElementById("faqP");

  const welcomeH1 = document.getElementById("welcomeH1");
  const welcomeH2 = document.getElementById("welcomeH2");
  const welcomeP = document.getElementById("welcomeP");

  const daysP = document.getElementById("daysP");
  const hoursP = document.getElementById("hoursP");
  const minutesP = document.getElementById("minutesP");
  const secondsP = document.getElementById("secondsP");

  const h2Minted = document.getElementById("h2Minted");
  const pTxnLink = document.getElementById("pTxnLink");
  const buttonViwTxn = document.getElementById("buttonViwTxn");
  const pViewCollection = document.getElementById("pViewCollection");
  const buttonViewCollection = document.getElementById("buttonViewCollection");

  const h3Supply = document.getElementById("h3Supply");
  const h3PricePerMint = document.getElementById("h3PricePerMint");
  const h3MaxPerTxn = document.getElementById("h3MaxPerTxn");
  const setQtyMaxText = document.getElementById("setQtyMax");

  const pContractAddress = document.getElementById("pContractAddress");
  const aContractAddressLink = document.getElementById("setQtyMax");

  // FAQ section
  const faqTitle1 = document.getElementById("faqTitle1");
  const faqDescription1 = document.getElementById("faqDescription1");
  const faqTitle2 = document.getElementById("faqTitle2");
  const faqDescription2 = document.getElementById("faqDescription2");
  const faqTitle3 = document.getElementById("faqTitle3");
  const faqDescription3 = document.getElementById("faqDescription3");
  const faqTitle4 = document.getElementById("faqTitle4");
  const faqDescription4 = document.getElementById("faqDescription4");
  const faqTitle5 = document.getElementById("faqTitle5");
  const faqDescription5 = document.getElementById("faqDescription5");
  const faqTitle6 = document.getElementById("faqTitle6");
  const faqDescription6 = document.getElementById("faqDescription6");
  const faqTitle7 = document.getElementById("faqTitle7");
  const faqDescription7 = document.getElementById("faqDescription7");
  const faqTitle8 = document.getElementById("faqTitle8");
  const faqDescription8 = document.getElementById("faqDescription8");
  const faqTitle9 = document.getElementById("faqTitle9");
  const faqDescription9 = document.getElementById("faqDescription9");
  const faqTitle10 = document.getElementById("faqTitle10");
  const faqDescription10 = document.getElementById("faqDescription10");
  const faqTitle11 = document.getElementById("faqTitle11");
  const faqDescription11 = document.getElementById("faqDescription11");
  const faqTitle12 = document.getElementById("faqTitle12");
  const faqDescription12 = document.getElementById("faqDescription12");
  const faqTitle13 = document.getElementById("faqTitle13");
  const faqDescription13 = document.getElementById("faqDescription13");

  // Team Member Title
  const pteamMemberTitle1 = document.getElementById("teamMemberTitle1");
  const pteamMemberTitle2 = document.getElementById("teamMemberTitle2");
  const pteamMemberTitle3 = document.getElementById("teamMemberTitle3");
  const pteamMemberTitle4 = document.getElementById("teamMemberTitle4");
  //const pteamMemberTitle5 = document.getElementById("teamMemberTitle5");

  // Road Map
  const pRoadmapTitle1 = document.getElementById("roadmapTitle1");
  const pRoadmapContent1 = document.getElementById("roadmapContent1");
  const pRoadmapTitle2 = document.getElementById("roadmapTitle2");
  const pRoadmapContent2 = document.getElementById("roadmapContent2");
  const pRoadmapTitle3 = document.getElementById("roadmapTitle3");
  const pRoadmapContent3 = document.getElementById("roadmapContent3");

  const callForActionP = document.getElementById("callForActionP");



  if (currentLanguage === "pt") {
    headerMenuAbout.innerText = header_menu_about_pt;
    headerMenuRoadmap.innerText = header_menu_roadmap_pt;
    headerMenuTeam.innerHTML = header_menu_team_pt;
    headerMenuFAQ.innerHTML = header_menu_faq_pt;

    welcomeH1.innerText = welcome_h1_pt;
    welcomeH2.innerText = welcome_h2_pt;
    welcomeP.innerHTML = welcome_p_pt;

    aboutH1.innerText = header_menu_about_pt;
    roadmapH1.innerText = header_menu_roadmap_pt;
    teamH1.innerText = header_menu_team_pt;
    faqH1.innerText = header_menu_faq_pt;

    aboutP.innerText = content_menu_about_pt;
    roadmapP.innerText = content_menu_roadmap_pt;
    // teamP.innerText = content_menu_team_pt;
    // faqP.innerText = content_menu_faq_pt;

    daysP.innerText = days_pt;
    hoursP.innerText = hours_pt;
    minutesP.innerText = minutes_pt;
    secondsP.innerText = seconds_pt;

    h2Minted.innerText = h2_mintedExclamation_pt;
    pTxnLink.innerText = p_transaction_link_pt;
    buttonViwTxn.innerText = button_view_transaction_pt;
    pViewCollection.innerText = p_view_collection_pt;
    buttonViewCollection.innerText = button_view_collection_pt;

    h3Supply.innerText = h3_Supply_pt;
    h3PricePerMint.innerText = h3_PricePerMint_pt;
    h3MaxPerTxn.innerText = h3_MaxPerTxn_pt;
    setQtyMaxText.innerText = set_QtyMaxText_pt;

    pContractAddress.innerHTML = p_verified_contract_address_pt;

    // FAQ
    faqTitle1.innerText = faq_title_1_pt;
    faqDescription1.innerText = faq_description_1_pt;
    faqTitle2.innerText = faq_title_2_pt;
    faqDescription2.innerText = faq_description_2_pt;
    faqTitle3.innerText = faq_title_3_pt;
    faqDescription3.innerText = faq_description_3_pt;
    faqTitle4.innerText = faq_title_4_pt;
    faqDescription4.innerText = faq_description_4_pt;
    faqTitle5.innerText = faq_title_5_pt;
    faqDescription5.innerText = faq_description_5_pt;
    faqTitle6.innerText = faq_title_6_pt;
    faqDescription6.innerText = faq_description_6_pt;
    faqTitle7.innerText = faq_title_7_pt;
    faqDescription7.innerText = faq_description_7_pt;
    faqTitle8.innerText = faq_title_8_pt;
    faqDescription8.innerText = faq_description_8_pt;
    faqTitle9.innerText = faq_title_9_pt;
    faqDescription9.innerText = faq_description_9_pt;
    faqTitle10.innerText = faq_title_10_pt;
    faqDescription10.innerText = faq_description_10_pt;
    faqTitle11.innerText = faq_title_11_pt;
    faqDescription11.innerText = faq_description_11_pt;
    faqTitle12.innerText = faq_title_12_pt;
    faqDescription12.innerText = faq_description_12_pt;
    faqTitle13.innerText = faq_title_13_pt;
    faqDescription13.innerText = faq_description_13_pt;

    // Team Member Title
    pteamMemberTitle1.innerText = p_team_member_title_1_pt;
    pteamMemberTitle2.innerText = p_team_member_title_2_pt;
    pteamMemberTitle3.innerText = p_team_member_title_3_pt;
    pteamMemberTitle4.innerText = p_team_member_title_4_pt;
    //pteamMemberTitle5.innerText = p_team_member_title_5_pt;

    // Road Map
    pRoadmapTitle1.innerText = p_roadmap_title_1_pt;
    pRoadmapContent1.innerText = p_roadmap_content_1_pt;
    pRoadmapTitle2.innerText = p_roadmap_title_2_pt;
    pRoadmapContent2.innerText = p_roadmap_content_2_pt;
    pRoadmapTitle3.innerText = p_roadmap_title_3_pt;
    pRoadmapContent3.innerText = p_roadmap_content_3_pt;

    callForActionP.innerText = p_call_for_action_pt;
  }
  else {
    headerMenuAbout.innerText = header_menu_about;
    headerMenuRoadmap.innerText = header_menu_roadmap;
    headerMenuTeam.innerHTML = header_menu_team;
    headerMenuFAQ.innerHTML = header_menu_faq;

    welcomeH1.innerText = welcome_h1;
    welcomeH2.innerText = welcome_h2;
    welcomeP.innerHTML = welcome_p;

    aboutH1.innerText = header_menu_about;
    roadmapH1.innerText = header_menu_roadmap;
    teamH1.innerText = header_menu_team;
    faqH1.innerText = header_menu_faq;

    aboutP.innerText = content_menu_about;
    roadmapP.innerText = content_menu_roadmap;
    // teamP.innerText = content_menu_team;
    // faqP.innerText = content_menu_faq;

    h2Minted.innerText = h2_mintedExclamation;
    pTxnLink.innerText = p_transaction_link;
    buttonViwTxn.innerText = button_view_transaction;
    pViewCollection.innerText = p_view_collection;
    buttonViewCollection.innerText = button_view_collection;

    h3Supply.innerText = h3_Supply;
    h3PricePerMint.innerText = h3_PricePerMint;
    h3MaxPerTxn.innerText = h3_MaxPerTxn;
    setQtyMaxText.innerText = set_QtyMaxText;

    pContractAddress.innerHTML = p_verified_contract_address;

    // FAQ
    faqTitle1.innerText = faq_title_1;
    faqDescription1.innerText = faq_description_1;
    faqTitle2.innerText = faq_title_2;
    faqDescription2.innerText = faq_description_2;
    faqTitle3.innerText = faq_title_3;
    faqDescription3.innerText = faq_description_3;
    faqTitle4.innerText = faq_title_4;
    faqDescription4.innerText = faq_description_4;
    faqTitle5.innerText = faq_title_5;
    faqDescription5.innerText = faq_description_5;
    faqTitle6.innerText = faq_title_6;
    faqDescription6.innerText = faq_description_6;
    faqTitle7.innerText = faq_title_7;
    faqDescription7.innerText = faq_description_7;
    faqTitle8.innerText = faq_title_8;
    faqDescription8.innerText = faq_description_8;
    faqTitle9.innerText = faq_title_9;
    faqDescription9.innerText = faq_description_9;
    faqTitle10.innerText = faq_title_10;
    faqDescription10.innerText = faq_description_10;
    faqTitle11.innerText = faq_title_11;
    faqDescription11.innerText = faq_description_11;
    faqTitle12.innerText = faq_title_12;
    faqDescription12.innerText = faq_description_12;
    faqTitle13.innerText = faq_title_13;
    faqDescription13.innerText = faq_description_13;

    // Team Member Title
    pteamMemberTitle1.innerText = p_team_member_title_1;
    pteamMemberTitle2.innerText = p_team_member_title_2;
    pteamMemberTitle3.innerText = p_team_member_title_3;
    pteamMemberTitle4.innerText = p_team_member_title_4;
    //pteamMemberTitle5.innerText = p_team_member_title_5;

    // Road Map
    pRoadmapTitle1.innerText = p_roadmap_title_1;
    pRoadmapContent1.innerText = p_roadmap_content_1;
    pRoadmapTitle2.innerText = p_roadmap_title_2;
    pRoadmapContent2.innerText = p_roadmap_content_2;
    pRoadmapTitle3.innerText = p_roadmap_title_3;
    pRoadmapContent3.innerText = p_roadmap_content_3;

    callForActionP.innerText = p_call_for_action;
  }

}

// METAMASK CONNECTION
window.addEventListener("DOMContentLoaded", async () => {
  // const welcomeH1 = document.getElementById("welcomeH1");
  // const welcomeH2 = document.getElementById("welcomeH2");
  // const welcomeP = document.getElementById("welcomeP");

  // welcomeH1.innerText = welcome_h1;
  // welcomeH2.innerText = welcome_h2;
  // welcomeP.innerHTML = welcome_p;

  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    checkChain();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  }

  if (window.web3) {
    // Check if User is already connected by retrieving the accounts
    await window.web3.eth.getAccounts().then(async (addr) => {
      accounts = addr;
    });
  }

  const splide = new Splide(".splide", {
    type: "loop",
    arrows: false,
    perMove: 3,
    pagination: false,
    autoplay: true,
    direction: 'ttb',
    height: "calc(100vh - 90px)",
    width: '30vw',
    autoHeight: true,
  });
  splide.mount();

  updateConnectStatus();
  if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    window.ethereum.on("accountsChanged", (newAccounts) => {
      accounts = newAccounts;
      updateConnectStatus();
    });
  }

  // English and Portuguese language logic  
  const ptLangFlag = document.getElementById("pt");
  ptLangFlag.onclick = () => {
    localStorage.setItem("language", "pt");
    updatePageLanguage();
  }

  const enLangFlag = document.getElementById("en");
  enLangFlag.onclick = () => {
    localStorage.setItem("language", "en");
    updatePageLanguage();
  }

  updatePageLanguage();

});

const updateConnectStatus = async () => {
  const onboarding = new MetaMaskOnboarding();

  const onboardButton = document.getElementById("connectWallet");
  const notConnected = document.querySelector('.not-connected');
  const spinner = document.getElementById("spinner");
  if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
    (currentLanguage === "pt") ? onboardButton.innerText = install_metamask_pt : onboardButton.innerText = install_metamask;
    // onboardButton.innerText = "Install MetaMask!";
    onboardButton.onclick = () => {
      //onboardButton.innerText = "Connecting...";
      (currentLanguage === "pt") ? onboardButton.innerText = connecting_pt : onboardButton.innerText = connecting;
      onboardButton.disabled = true;
      onboarding.startOnboarding();
      // HIDE SPINNER
      spinner.classList.add('hidden');
      notConnected.classList.remove('hidden');
      notConnected.classList.add('show-not-connected');
    };
  } else if (accounts && accounts.length > 0) {
    onboardButton.innerText = `✔ ...${accounts[0].slice(-4)}`;
    window.address = accounts[0];
    onboardButton.disabled = true;
    onboarding.stopOnboarding();
    notConnected.classList.remove('show-not-connected');
    notConnected.classList.add('hidden');
    // SHOW SPINNER
    spinner.classList.remove('hidden');
    window.contract = new web3.eth.Contract(abi, contractAddress);
    loadInfo();
  } else {
    //onboardButton.innerText = "Connect MetaMask!";
    (currentLanguage === "pt") ? onboardButton.innerText = connect_metamask_pt : onboardButton.innerText = connect_metamask;
    // HIDE SPINNER
    spinner.classList.add('hidden');
    notConnected.classList.remove('hidden');
    notConnected.classList.add('show-not-connected');
    onboardButton.onclick = async () => {
      await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(function (accts) {
          onboardButton.innerText = `✔ ...${accts[0].slice(-4)}`;
          notConnected.classList.remove('show-not-connected');
          notConnected.classList.add('hidden');
          // SHOW SPINNER
          spinner.classList.remove('hidden');
          onboardButton.disabled = true;
          window.address = accts[0];
          accounts = accts;
          window.contract = new web3.eth.Contract(abi, contractAddress);
          loadInfo();
        });
    };
  }
};

async function checkChain() {
  let chainId = 0;
  if (chain === 'rinkeby') {
    chainId = 4;
  } else if (chain === 'polygon') {
    chainId = 137;
  }
  if (window.ethereum.networkVersion !== chainId) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: web3.utils.toHex(chainId) }],
      });
      updateConnectStatus();
    } catch (err) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (err.code === 4902) {
        try {
          if (chain === 'rinkeby') {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainName: 'Rinkeby Test Network',
                  chainId: web3.utils.toHex(chainId),
                  nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
                  rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
                },
              ],
            });
          } else if (chain === 'polygon') {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainName: 'Polygon Mainnet',
                  chainId: web3.utils.toHex(chainId),
                  nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
                  rpcUrls: ['https://polygon-rpc.com/'],
                },
              ],
            });
          }
          updateConnectStatus();
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
}

async function loadInfo() {
  window.info = await window.contract.methods.getInfo().call();
  const publicMintActive = await contract.methods.mintingActive().call();
  const presaleMintActive = await contract.methods.presaleActive().call();
  const mainHeading = document.getElementById("mainHeading");
  const subHeading = document.getElementById("subHeading");
  const mainText = document.getElementById("mainText");
  const mainTextAlert = document.getElementById("mainTextAlert");
  const actionButton = document.getElementById("actionButton");
  const mintContainer = document.getElementById("mintContainer");
  const mintButton = document.getElementById("mintButton");
  const spinner = document.getElementById("spinner");

  let startTime = "";
  if (publicMintActive) {
    if (currentLanguage === "pt") {
      mainHeading.innerText = h1_public_mint_pt;
      mainText.innerText = p_public_mint_pt;
      mainTextAlert.classList.add('hidden');
      mintButton.innerText = button_public_mint_pt;
    }
    else {
      mainHeading.innerText = h1_public_mint;
      mainText.innerText = p_public_mint;
      mainTextAlert.classList.add('hidden');
      mintButton.innerText = button_public_mint;
    }

    actionButton.classList.add('hidden');
    mintContainer.classList.remove('hidden');
    setTotalPrice();
  } else if (presaleMintActive) {
    startTime = window.info.runtimeConfig.publicMintStart;

    if (currentLanguage === "pt") {
      mainHeading.innerText = h1_presale_mint_pt;
      subHeading.innerText = h2_presale_mint_pt;
    }
    else {
      mainHeading.innerText = h1_presale_mint;
      subHeading.innerText = h2_presale_mint;
    }

    try {
      // CHECK IF WHITELISTED
      const merkleData = await fetch(
        `/.netlify/functions/merkleProof/?wallet=${window.address}&chain=${chain}&contract=${contractAddress}`
      );
      const merkleJson = await merkleData.json();
      const whitelisted = await contract.methods.isWhitelisted(window.address, merkleJson).call();
      if (!whitelisted) {

        if (currentLanguage === "pt") {
          mainText.innerText = p_presale_mint_not_whitelisted_pt;
          mainTextAlert.classList.add('hidden');
          actionButton.innerText = button_presale_mint_not_whitelisted_pt;
        }
        else {
          mainText.innerText = p_presale_mint_not_whitelisted;
          mainTextAlert.classList.add('hidden');
          actionButton.innerText = button_presale_mint_not_whitelisted;
        }
      } else {

        if (currentLanguage === "pt") {
          mainText.innerText = p_presale_mint_whitelisted_pt;
          mainTextAlert.innerText = p_presale_mint_whitelisted_alert_pt;
          mainTextAlert.classList.remove('hidden');
          mintButton.innerText = button_presale_mint_whitelisted_pt;
        }
        else {
          mainText.innerText = p_presale_mint_whitelisted;
          mainTextAlert.innerText = p_presale_mint_whitelisted_alert;
          mainTextAlert.classList.remove('hidden');
          mintButton.innerText = button_presale_mint_whitelisted;
        }

        mintContainer.classList.remove('hidden');
        actionButton.classList.add('hidden');
      }
    } catch (e) {
      // console.log(e);

      if (currentLanguage === "pt") {
        mainText.innerText = p_presale_mint_already_minted_pt;
        mainTextAlert.classList.add('hidden');
        actionButton.innerText = button_presale_already_minted_pt;
      }
      else {
        mainText.innerText = p_presale_mint_already_minted;
        mainTextAlert.classList.add('hidden');
        actionButton.innerText = button_presale_already_minted;
      }
    }
    setTotalPrice();
  } else {
    startTime = window.info.runtimeConfig.presaleMintStart;
    if (currentLanguage === "pt") {
      mainHeading.innerText = h1_presale_coming_soon_pt;
      subHeading.innerText = h2_presale_coming_soon_pt;
      mainText.innerText = p_presale_coming_soon_pt;
      actionButton.innerText = button_presale_coming_soon_pt;
    }
    else {
      mainHeading.innerText = h1_presale_coming_soon;
      subHeading.innerText = h2_presale_coming_soon;
      mainText.innerText = p_presale_coming_soon;
      actionButton.innerText = button_presale_coming_soon;
    }

  }

  const clockdiv = document.getElementById("countdown");
  clockdiv.setAttribute("data-date", startTime);
  countdown();

  // HIDE SPINNER
  spinner.classList.add('hidden');

  // SHOW CARD
  setTimeout(() => {
    const countdownCard = document.querySelector('.countdown');
    countdownCard.classList.add('show-card');
  }, 1000);

  let priceType = '';
  if (chain === 'rinkeby') {
    priceType = 'ETH';
  } else if (chain === 'polygon') {
    priceType = 'MATIC';
  }
  // coloquei um MATIC aqui
  const price = 0.00001;//web3.utils.fromWei(info.deploymentConfig.mintPrice, 'ether');
  const pricePerMint = document.getElementById("pricePerMint");
  const maxPerMint = document.getElementById("maxPerMint");
  const totalSupply = document.getElementById("totalSupply");
  const mintInput = document.getElementById("mintInput");

  pricePerMint.innerText = `${price} ${priceType}`;
  maxPerMint.innerText = `${info.deploymentConfig.tokensPerMint}`;
  totalSupply.innerText = `${info.deploymentConfig.maxSupply}`;
  mintInput.setAttribute("max", info.deploymentConfig.tokensPerMint);

  // MINT INPUT
  const mintIncrement = document.getElementById("mintIncrement");
  const mintDecrement = document.getElementById("mintDecrement");
  const setQtyMax = document.getElementById("setQtyMax");
  const min = mintInput.attributes.min.value || false;
  const max = mintInput.attributes.max.value || false;
  mintDecrement.onclick = () => {
    let value = parseInt(mintInput.value) - 1 || 1;
    if (!min || value >= min) {
      mintInput.value = value;
      setTotalPrice()
    }
  };
  mintIncrement.onclick = () => {
    let value = parseInt(mintInput.value) + 1 || 1;
    if (!max || value <= max) {
      mintInput.value = value;
      setTotalPrice()
    }
  };
  setQtyMax.onclick = () => {
    mintInput.value = max;
    setTotalPrice()
  };
  mintInput.onchange = () => {
    setTotalPrice()
  };
  mintInput.onkeyup = async (e) => {
    if (e.keyCode === 13) {
      mint();
    }
  };
  mintButton.onclick = mint;

}

function setTotalPrice() {
  const mintInput = document.getElementById("mintInput");
  const mintInputValue = parseInt(mintInput.value);
  const totalPrice = document.getElementById("totalPrice");
  const mintButton = document.getElementById("mintButton");

  if (isNaN(mintInputValue) || mintInputValue < 1 || mintInputValue > info.deploymentConfig.tokensPerMint) {
    (currentLanguage === "pt") ? totalPrice.innerHTML = invalid_quantity_pt : totalPrice.innerText = invalid_quantity;
    //mintButton.disabled = true;
    //mintInput.disabled = true;    
    mintInput.value = 1;
    return;
  }
  const totalPriceWei = BigInt(info.deploymentConfig.mintPrice) * BigInt(mintInputValue);

  let priceType = '';
  if (chain === 'rinkeby') {
    priceType = 'ETH';
  } else if (chain === 'polygon') {
    priceType = 'MATIC';
  }
  const price = 0.00001 * mintInputValue;//web3.utils.fromWei(totalPriceWei.toString(), 'ether');
  totalPrice.innerText = `${price} ${priceType}`;
  mintButton.disabled = false;
  mintInput.disabled = false;
}

async function mint() {
  const mintButton = document.getElementById("mintButton");
  mintButton.disabled = true;
  const spinner = (currentLanguage === "pt") ? '<div class="dot-elastic"></div><span>Esperando a transação...</span>' : '<div class="dot-elastic"></div><span>Waiting for transaction...</span>';
  mintButton.innerHTML = spinner;

  mainText.style.color = "white";

  const amount = parseInt(document.getElementById("mintInput").value);
  const value = BigInt(info.deploymentConfig.mintPrice) * BigInt(amount);
  console.log(amount + " and " + value);
  const publicMintActive = await contract.methods.mintingActive().call();
  const presaleMintActive = await contract.methods.presaleActive().call();

  if (publicMintActive) {
    // PUBLIC MINT
    try {
      const mintTransaction = await contract.methods
        .mint(amount)
        .send({ from: window.address, value: value.toString() });
      if (mintTransaction) {
        if (chain === 'rinkeby') {
          const url = `https://rinkeby.etherscan.io/tx/${mintTransaction.transactionHash}`;
          const mintedContainer = document.querySelector('.minted-container');
          const countdownContainer = document.querySelector('.countdown');
          const mintedTxnBtn = document.getElementById("mintedTxnBtn");
          mintedTxnBtn.href = url;
          countdownContainer.classList.add('hidden');
          mintedContainer.classList.remove('hidden');
        }
        console.log("Minuted successfully!", `Transaction Hash: ${mintTransaction.transactionHash}`);
      } else {
        const mainText = document.getElementById("mainText");
        if (currentLanguage === "pt") {
          mainText.innerText = mint_failed_pt;
          mainText.style.color = "red";
          mintButton.innerText = button_public_mint_pt;
        }
        else {
          mainText.innerText = mint_failed;
          mainText.style.color = "red";
          mintButton.innerText = button_public_mint;
        }

        mintButton.disabled = false;
        console.log("Failed to mint!");
      }
    } catch (e) {
      const mainText = document.getElementById("mainText");

      if (currentLanguage === "pt") {
        mainText.innerText = mint_failed_pt;
        mainText.style.color = "red";
        mintButton.innerText = button_public_mint_pt;
      }
      else {
        mainText.innerText = mint_failed;
        mainText.style.color = "red";
        mintButton.innerText = button_public_mint;
      }

      mintButton.disabled = false;

      console.log(e);
    }
  } else if (presaleMintActive) {
    // PRE-SALE MINTING
    try {
      const merkleData = await fetch(
        `/.netlify/functions/merkleProof/?wallet=${window.address}&chain=${chain}&contract=${contractAddress}`
      );
      const merkleJson = await merkleData.json();
      const presaleMintTransaction = await contract.methods
        .presaleMint(amount, merkleJson)
        .send({ from: window.address, value: value.toString() });
      if (presaleMintTransaction) {
        if (chain === 'rinkeby') {
          const url = `https://rinkeby.etherscan.io/tx/${presaleMintTransaction.transactionHash}`;
          const mintedContainer = document.querySelector('.minted-container');
          const countdownContainer = document.querySelector('.countdown');
          const mintedTxnBtn = document.getElementById("mintedTxnBtn");
          mintedTxnBtn.href = url;
          countdownContainer.classList.add('hidden');
          mintedContainer.classList.remove('hidden');
        }
        console.log("Minuted successfully!", `Transaction Hash: ${presaleMintTransaction.transactionHash}`);
      } else {
        const mainText = document.getElementById("mainText");
        if (currentLanguage === "pt") {
          mainText.innerText = mint_failed_pt;
          mainText.style.color = "red";
          mintButton.innerText = button_presale_mint_whitelisted_pt;
        }
        else {
          mainText.innerText = mint_failed;
          mainText.style.color = "red";
          mintButton.innerText = button_presale_mint_whitelisted;
        }

        mintButton.disabled = false;

        console.log("Failed to mint!");
      }
    } catch (e) {
      const mainText = document.getElementById("mainText");
      if (currentLanguage === "pt") {
        mainText.innerText = mint_failed_pt;
        mainText.style.color = "red";
        mintButton.innerText = button_presale_mint_whitelisted_pt;
      }
      else {
        mainText.innerText = mint_failed;
        mainText.style.color = "red";
        mintButton.innerText = button_presale_mint_whitelisted;
      }
      mintButton.disabled = false;

      // console.log(e);
    }
  }
}
