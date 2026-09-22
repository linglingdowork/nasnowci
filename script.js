// Inisialisasi Telegram WebApp
let tg = null;

if (window.Telegram && window.Telegram.WebApp) {
    tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
}

// Fallback gambar jika gambar belum ada di folder
function getImageUrl(filename, appName) {
    return filename;
}

function handleImageError(imgElement, appName) {
    imgElement.onerror = null;
    imgElement.src = `https://placehold.co/100x100/FFF9EF/73151B?text=${appName.substring(0,3).toUpperCase()}`;
}

// ============================================================
// DATABASE
// ============================================================

const database = [

    // ================== STREAMING APPS ==================

    {
        category: 'STREAMING APPS',
        id: 'netflix',
        name: 'Netflix',
        image: 'image/netflix.webp',
        stepLabels: ['Choose your plan', 'Choose duration'],
        data: {
            'SHARING': {
                '1 DAY': 4000,
                '2 DAYS': 6000,
                '3 DAYS': 9000,
                '5 DAYS': 12000,
                '7 DAYS': 15000,
                '14 DAYS': 24000,
                '21 DAYS': 34000,
                '1 MONTH': 45000
            },
            'PRIVATE': {
                '1 MONTH': 175000
            }
        }
    },

    {
        category: 'STREAMING APPS',
        id: 'disney',
        name: 'Disney',
        image: 'image/disney.webp',
        stepLabels: ['Choose your plan', 'Choose duration'],
        data: {
            'SHARING': {
                '1 DAY': 4000,
                '2 DAYS': 7000,
                '3 DAYS': 10000,
                '5 DAYS': 13000,
                '7 DAYS': 15000,
                '14 DAYS': 22000,
                '21 DAYS': 30000,
                '1 MONTH': 35000
            },
            'PRIVATE': {
                '1 MONTH': 130000
            }
        }
    },

    {
        category: 'STREAMING APPS',
        id: 'viu',
        name: 'Viu',
        image: 'image/viu.png',
        stepLabels: ['Choose your plan', 'Choose duration'],
        data: {
            'PRIVATE ANTI LIMIT': {
                '1 DAY': 2000,
                '2 DAYS': 3000,
                '3 DAYS': 4000,
                '5 DAYS': 5000,
                '7 DAYS': 6000,
                '1 MONTH': 10000,
                '2 MONTHS': 15000,
                '3 MONTHS': 17000,
                '4 MONTHS': 20000,
                '5 MONTHS': 23000,
                '6 MONTHS': 25000,
                '1 YEAR': 35000
            }
        }
    },

    {
        category: 'STREAMING APPS',
        id: 'iqiyi',
        name: 'iQIYI',
        image: 'image/iqiyi.png',
        stepLabels: ['Choose your plan', 'Choose duration'],
        data: {
            'SHARING STANDARD': {
                '1 MONTH': 10000,
                '3 MONTHS': 17000
            },
            'SHARING PREMIUM': {
                '1 MONTH': 12000,
                '3 MONTHS': 20000
            },
            'PRIVATE STANDARD': {
                '1 MONTH': 32000
            },
            'PRIVATE PREMIUM': {
                '1 MONTH': 37000
            }
        }
    },

    {
        category: 'STREAMING APPS',
        id: 'wetv',
        name: 'WeTV',
        image: 'image/wetv.jpeg',
        stepLabels: ['Choose your plan', 'Choose duration'],
        data: {
            'SHARING': {
                '1 MONTH': 13000
            },
            'ANTILIMIT': {
                '1 MONTH': 20000
            },
            'PRIVATE': {
                '1 MONTH': 35000
            }
        }
    },

    {
        category: 'STREAMING APPS',
        id: 'hbo',
        name: 'HBO',
        image: 'image/hbo.png',
        stepLabels: ['Choose your plan', 'Choose duration'],
        data: {
            'SHARING': {
                '1 DAY': 3500,
                '3 DAYS': 9000,
                '7 DAYS': 15000,
                '1 MONTH': 24000
            },
            'PRIVATE': {
                '1 MONTH': 90000
            }
        }
    },

    {
        category: 'STREAMING APPS',
        id: 'bstation',
        name: 'Bstation',
        image: 'image/bstation.jpeg',
        stepLabels: ['Choose your plan', 'Choose duration'],
        data: {
            'SHARING': {
                '1 MONTH': 13000
            },
            'PRIVATE': {
                '1 MONTH': 42000
            }
        }
    },

    {
        category: 'STREAMING APPS',
        id: 'loklok',
        name: 'Loklok',
        image: 'image/loklok.jpeg',
        stepLabels: ['Choose your plan', 'Choose duration'],
        data: {
            'SHARING BASIC': {
                '1 MONTH': 22000
            },
            'SHARING STANDART': {
                '1 MONTH': 27000
            }
        }
    },

    {
        category: 'STREAMING APPS',
        id: 'youku',
        name: 'Youku',
        image: 'image/youku.png',
        stepLabels: ['Choose your plan', 'Choose duration'],
        data: {
            'SHARING': {
                '1 MONTH': 10000,
                '3 MONTHS': 17000
            }
        }
    },

    {
        category: 'STREAMING APPS',
        id: 'pidioookk',
        name: 'Pidioookk',
        image: 'image/vidio.png',
        stepLabels: ['Choose device', 'Choose plan', 'Choose duration'],
        data: {
            'TV': {
                'PRIVATE': {
                    '1 MONTH': 17000
                }
            },
            'MOBILE': {
                'PRIVATE': {
                    '1 MONTH': 30000
                }
            },
            'ALL DEVICE': {
                'PRIVATE': {
                    '1 MONTH': 45000
                }
            }
        }
    },

    {
        category: 'STREAMING APPS',
        id: 'youtube',
        name: 'YouTube',
        image: 'image/youtube.png',
        stepLabels: ['Choose your plan', 'Choose duration'],
        data: {
            'FAMPLAN': {
                '1 MONTH': 15000,
                '2 MONTHS': 25000
            },
            'INDPLAN': {
                '1 MONTH': 25000,
                '2 MONTHS': 35000
            }
        }
    },

    {
        category: 'STREAMING APPS',
        id: 'gagaoolala',
        name: 'GagaOOLala',
        image: 'image/gagaoolala.png',
        stepLabels: ['Choose your plan', 'Choose duration'],
        data: {
            'SHARING': {
                '1 MONTH': 18000
            }
        }
    },

    {
        category: 'STREAMING APPS',
        id: 'amazon-prime',
        name: 'Amazon Prime',
        image: 'image/prime.webp',
        stepLabels: ['Choose your plan', 'Choose duration'],
        data: {
            'SHARING': {
                '1 DAY': 3000,
                '3 DAYS': 6000,
                '7 DAYS': 8000,
                '1 MONTH (4U)': 10000,
                '1 MONTH (2U)': 13000
            },
            'PRIVATE': {
                '1 MONTH': 23000
            }
        }
    },

    // ================== EDITING APPS ==================

    {
        category: 'EDITING APPS',
        id: 'canva',
        name: 'Canva',
        image: 'image/canva.jpeg',

        // EMAIL KHUSUS CANVA
        stepLabels: ['Choose your plan', 'Choose duration'],

        data: {
            'MEMBER': {
                '1 DAY': 2000,
                '3 DAYS': 2500,
                '7 DAYS': 4000,
                '1 MONTH': 15000,
                '2 MONTHS': 17000,
                '3 MONTHS': 19000,
                '4 MONTHS': 21000,
                '5 MONTHS': 23000,
                '6 MONTHS': 25000
            },

            'DESIGNER': {
                '1 DAY': 3000,
                '3 DAYS': 3500,
                '7 DAYS': 5000,
                '1 MONTH': 16000,
                '2 MONTHS': 18000,
                '3 MONTHS': 19000,
                '4 MONTHS': 22000,
                '5 MONTHS': 24000,
                '6 MONTHS': 25000
            }
        }
    },

    {
        category: 'EDITING APPS',
        id: 'capcut',
        name: 'CapCut',
        image: 'image/capcut.png',

        // CAPCUT TIDAK ADA EMAIL
        stepLabels: ['Choose your plan', 'Choose duration'],

        data: {
            'SHARING': {
                '1 DAY': 3000,
                '2 DAYS': 5000,
                '3 DAYS': 7000,
                '7 DAYS': 9000
            },
            'PRIVATE': {
                '7 DAYS': 25000,
                '1 MONTH': 35000
            }
        }
    },

    {
        category: 'EDITING APPS',
        id: 'alight-motion',
        name: 'Alight Motion',
        image: 'image/alight.jpeg',
        stepLabels: ['Choose your plan', 'Choose duration'],
        data: {
            'SHARING': {
                '1 DAY': 1500,
                '7 DAYS': 5000,
                '1 MONTH': 8000,
                '2 MONTHS': 10000,
                '3 MONTHS': 12000,
                '4 MONTHS': 13000,
                '5 MONTHS': 14000,
                '6 MONTHS': 15000,
                '1 YEAR': 17000
            },
            'PRIVATE': {
                '7 DAYS': 8000,
                '1 MONTH': 18000,
                '1 YEAR': 25000
            }
        }
    }
];


// ============================================================
// STATE
// ============================================================

let cart = [];
let currentCategoryName = '';
let currentProduct = null;
let currentSelections = [];

// Khusus Canva
let currentCanvaEmail = '';


// ============================================================
// FORMAT RUPIAH
// ============================================================

function formatRupiah(angka) {
    return 'Rp ' + angka
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


// ============================================================
// NAVIGASI
// ============================================================

function navigate(viewId) {

    document.querySelectorAll('.view-section').forEach(el => {
        el.classList.remove('active');
    });

    document.getElementById('view-' + viewId).classList.add('active');

    if (viewId === 'cart') {
        renderCart();
    }
}


// ============================================================
// BUKA KATEGORI
// ============================================================

function openCategory(category) {

    currentCategoryName = category;

    document.getElementById('category-title').innerText = category;

    const listContainer =
        document.getElementById('app-list-container');

    listContainer.innerHTML = '';

    const apps =
        database.filter(app => app.category === category);

    apps.forEach(app => {

        const card = document.createElement('div');

        card.className = 'app-card';

        card.onclick = () => openProduct(app.id);

        card.innerHTML = `
            <img
                src="${getImageUrl(app.image, app.name)}"
                alt="${app.name}"
                onerror="handleImageError(this, '${app.name}')"
            >

            <h4>${app.name}</h4>
        `;

        listContainer.appendChild(card);
    });

    navigate('category');
}


// ============================================================
// BUKA PRODUK
// ============================================================

function openProduct(productId) {

    currentProduct =
        database.find(a => a.id === productId);

    currentSelections = [];

    // Reset email Canva
    currentCanvaEmail = '';

    document.getElementById('product-title').innerText =
        currentProduct.name;

    const img =
        document.getElementById('product-image');

    img.src =
        getImageUrl(
            currentProduct.image,
            currentProduct.name
        );

    img.onerror = () =>
        handleImageError(
            img,
            currentProduct.name
        );

    renderProductSteps();

    navigate('product');
}


// ============================================================
// BACK
// ============================================================

function goBackProductStep() {

    // Kalau sedang di form email Canva
    if (
        currentProduct &&
        currentProduct.id === 'canva' &&
        currentSelections.length === 2 &&
        currentCanvaEmail === ''
    ) {
        currentSelections.pop();
        renderProductSteps();
        return;
    }

    // Kalau sudah ada email Canva
    if (
        currentProduct &&
        currentProduct.id === 'canva' &&
        currentSelections.length === 2 &&
        currentCanvaEmail !== ''
    ) {
        currentCanvaEmail = '';
        renderProductSteps();
        return;
    }

    if (currentSelections.length > 0) {

        currentSelections.pop();

        renderProductSteps();

    } else {

        navigate('category');

    }
}


// ============================================================
// RENDER PRODUCT
// ============================================================

function renderProductSteps() {

    const stepContainer =
        document.getElementById('step-container');

    const summaryContainer =
        document.getElementById('summary-container');

    const optionsContainer =
        document.getElementById('options-container');

    const stepLabel =
        document.getElementById('step-label');


    // ========================================================
    // AMBIL DATA BERDASARKAN PILIHAN
    // ========================================================

    let currentDataLevel =
        currentProduct.data;

    for (
        let i = 0;
        i < currentSelections.length;
        i++
    ) {

        currentDataLevel =
            currentDataLevel[currentSelections[i]];

    }


    // ========================================================
    // KHUSUS CANVA - EMAIL
    // ========================================================

    if (
        currentProduct.id === 'canva' &&
        currentSelections.length === 2 &&
        currentCanvaEmail === ''
    ) {

        stepContainer.style.display = 'block';

        summaryContainer.style.display = 'none';

        stepLabel.innerText = 'Enter email';

        optionsContainer.innerHTML = `

            <div
                style="
                    width: 100%;
                    max-width: 400px;
                    margin: 0 auto;
                "
            >

                <input
                    type="email"
                    id="canva-email"
                    placeholder="Masukkan email Canva"
                    style="
                        width: 100%;
                        box-sizing: border-box;
                        padding: 14px;
                        border: 1px solid #73151B;
                        border-radius: 8px;
                        font-size: 15px;
                        margin-bottom: 12px;
                    "
                >

                <button
                    class="option-btn"
                    onclick="submitCanvaEmail()"
                    style="width: 100%;"
                >
                    Continue
                </button>

            </div>

        `;

        return;
    }


    // ========================================================
    // SUMMARY
    // ========================================================

    if (
        currentSelections.length ===
        currentProduct.stepLabels.length
    ) {

        stepContainer.style.display = 'none';

        summaryContainer.style.display = 'block';


        document.getElementById(
            'summary-app-name'
        ).innerText =
            currentProduct.name;


        // =========================
        // SUMMARY CANVA
        // =========================

        if (currentProduct.id === 'canva') {

            document.getElementById(
                'summary-details'
            ).innerHTML = `

                ${currentSelections[0]}
                <br>

                ${currentSelections[1]}
                <br>

                Email: ${currentCanvaEmail}

            `;

        }

        // =========================
        // SUMMARY PRODUK LAIN
        // =========================

        else {

            document.getElementById(
                'summary-details'
            ).innerHTML =
                currentSelections.join(' <br> ');

        }


        // =========================
        // CARI HARGA
        // =========================

        let priceData =
            currentProduct.data;


        for (
            let i = 0;
            i < currentSelections.length;
            i++
        ) {

            priceData =
                priceData[currentSelections[i]];

        }


        document.getElementById(
            'summary-price'
        ).innerText =
            formatRupiah(priceData);


    } else {

        // ====================================================
        // PILIHAN BIASA
        // ====================================================

        stepContainer.style.display = 'block';

        summaryContainer.style.display = 'none';

        stepLabel.innerText =
            currentProduct.stepLabels[
                currentSelections.length
            ];

        optionsContainer.innerHTML = '';


        const options =
            Object.keys(currentDataLevel);


        options.forEach(opt => {

            const btn =
                document.createElement('button');

            btn.className =
                'option-btn';

            btn.innerText = opt;


            btn.onclick = () => {

                btn.classList.add(
                    'active-simulated'
                );


                setTimeout(() => {

                    currentSelections.push(opt);

                    renderProductSteps();

                }, 150);

            };


            optionsContainer.appendChild(btn);

        });

    }
}


// ============================================================
// SUBMIT EMAIL CANVA
// ============================================================

function submitCanvaEmail() {

    const emailInput =
        document.getElementById('canva-email');

    const email =
        emailInput.value.trim();


    if (!email) {

        showToast('Email wajib diisi!');

        return;
    }


    if (!emailInput.checkValidity()) {

        showToast('Format email tidak valid!');

        return;
    }


    currentCanvaEmail =
        email;


    renderProductSteps();
}


// ============================================================
// ADD TO CART
// ============================================================

function addToCart() {

    let price =
        currentProduct.data;


    // Harga selalu dihitung dari pilihan yang ada
    // di database. Email Canva tidak ikut dihitung.

    for (
        let i = 0;
        i < currentSelections.length;
        i++
    ) {

        price =
            price[currentSelections[i]];

    }


    const cartItem = {

        id: currentProduct.id,

        name: currentProduct.name,

        selections: [...currentSelections],

        price: price,

        qty: 1,

        // Email hanya disimpan untuk Canva
        email:
            currentProduct.id === 'canva'
                ? currentCanvaEmail
                : null
    };


    // Cek barang yang sama
    const existingItem =
        cart.find(item =>

            item.id === cartItem.id &&

            item.selections.join('|') ===
            cartItem.selections.join('|') &&

            item.email ===
            cartItem.email

        );


    if (existingItem) {

        existingItem.qty += 1;

    } else {

        cart.push(cartItem);

    }


    updateCartBadge();

    showToast('Added to Cart!');

    navigate('category');
}


// ============================================================
// CART BADGE
// ============================================================

function updateCartBadge() {

    const totalItems =
        cart.reduce(
            (sum, item) => sum + item.qty,
            0
        );

    document.getElementById(
        'cart-badge'
    ).innerText =
        totalItems;
}


// ============================================================
// RENDER CART
// ============================================================

function renderCart() {

    const container =
        document.getElementById(
            'cart-items-container'
        );

    const footer =
        document.getElementById(
            'cart-footer'
        );


    container.innerHTML = '';


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <p>Your cart is empty.</p>

                <button
                    class="btn-primary"
                    style="
                        margin-top: 20px;
                        width: auto;
                        padding: 10px 20px;
                    "
                    onclick="navigate('home')"
                >
                    BACK TO MENU
                </button>

            </div>

        `;

        footer.style.display = 'none';

        return;
    }


    footer.style.display = 'block';


    let totalPrice = 0;


    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.qty;

        totalPrice += itemTotal;


        let detailsText =
            item.selections.join(' · ');


        // Tambahkan email Canva di cart
        if (
            item.id === 'canva' &&
            item.email
        ) {

            detailsText +=
                ` · ${item.email}`;

        }


        const div =
            document.createElement('div');

        div.className =
            'cart-item';


        div.innerHTML = `

            <div class="cart-item-header">

                <div>

                    <div class="cart-item-title">
                        ${item.name}
                    </div>

                    <div class="cart-item-details">
                        ${detailsText}
                    </div>

                </div>

                <div class="cart-item-price">
                    ${formatRupiah(itemTotal)}
                </div>

            </div>


            <div class="cart-controls">

                <div class="qty-controls">

                    <button
                        class="qty-btn"
                        onclick="updateQty(${index}, -1)"
                    >
                        -
                    </button>

                    <span>
                        ${item.qty}
                    </span>

                    <button
                        class="qty-btn"
                        onclick="updateQty(${index}, 1)"
                    >
                        +
                    </button>

                </div>


                <button
                    class="remove-btn"
                    onclick="removeItem(${index})"
                >
                    Remove
                </button>

            </div>

        `;


        container.appendChild(div);

    });


    document.getElementById(
        'cart-total-price'
    ).innerText =
        formatRupiah(totalPrice);
}


// ============================================================
// UPDATE QTY
// ============================================================

function updateQty(index, change) {

    if (
        cart[index].qty + change > 0
    ) {

        cart[index].qty += change;

    } else {

        cart.splice(index, 1);

    }


    updateCartBadge();

    renderCart();
}


// ============================================================
// REMOVE ITEM
// ============================================================

function removeItem(index) {

    cart.splice(index, 1);

    updateCartBadge();

    renderCart();
}


// ============================================================
// PROCESS ORDER
// ============================================================

function processOrder() {

    let totalPrice = 0;


    let orderText =
        `NASNOWCI — ORDER\n\n`;


    orderText +=
        `────────────────────\n`;

    orderText +=
        `PESANAN\n\n`;


    cart.forEach((item, index) => {

        const subtotal =
            item.price * item.qty;

        totalPrice += subtotal;


        orderText +=
            `${index + 1}. ${item.name}\n`;


        // =========================
        // CANVA
        // =========================

        if (item.id === 'canva') {

            orderText +=
                `   ${item.selections[0]} • ${item.selections[1]}\n`;

            orderText +=
                `   Email: ${item.email}\n`;

        }

        // =========================
        // PRODUK LAIN
        // =========================

        else {

            orderText +=
                `   ${item.selections.join(" • ")}\n`;

        }


        orderText +=
            `   Qty: ${item.qty}\n`;

        orderText +=
            `   ${formatRupiah(subtotal)}\n\n`;

    });


    orderText +=
        `────────────────────\n`;

    orderText +=
        `TOTAL: ${formatRupiah(totalPrice)}\n\n`;


    orderText +=
        `Username:\n`;

    orderText +=
        `@__________\n\n`;


    orderText +=
        `Device Login:\n`;

    orderText +=
        `________________\n\n`;


    orderText +=
        `Payment:\n`;

    orderText +=
        `QRIS\n`;


    orderText +=
        `────────────────────`;


    const textarea =
        document.createElement('textarea');


    textarea.value =
        orderText;


    document.body.appendChild(
        textarea
    );


    textarea.select();


    try {

        document.execCommand('copy');

        showToast(
            "ORDER COPIED!"
        );

    } catch (err) {

        console.error(
            'Failed to copy text:',
            err
        );

        showToast(
            "Gagal copy order"
        );

    }


    document.body.removeChild(
        textarea
    );
}


// ============================================================
// TOAST
// ============================================================

function showToast(message) {

    const toast =
        document.getElementById('toast');

    toast.innerText =
        message;

    toast.classList.add('show');


    setTimeout(() => {

        toast.classList.remove('show');

    }, 2500);
}
