export function getChanges(entry, lang) {
  if (Array.isArray(entry.changes)) return entry.changes;
  return entry.changes[lang] ?? entry.changes['en'];
}

export const CHANGELOG = [
  {
    version: '1.44.39',
    date: '2026-08-23',
    changes: {
      en: [
        'New: Animated launch screen with gold glow effect',
        'Improved: Consistent back buttons across all screens',
        'Improved: Ad display optimized for better timing',
      ],
      fr: [
        'Nouveau : Écran de lancement animé avec effet doré',
        'Amélioré : Boutons retour cohérents sur tous les écrans',
        'Amélioré : Affichage des publicités optimisé',
      ],
      arTN: [
        'جديد: شاشة تشغيل متحركة مع تأثير ذهبي',
        'تحسين: أزرار الرجوع متسقة في كل الشاشات',
        'تحسين: توقيت الإعلانات محسّن',
      ],
    },
  },
  {
    version: '1.44.38',
    date: '2026-08-23',
    changes: {
      en: [
        'Fixed: Back buttons now display correctly in Arabic',
        'Fixed: Tour restart from Help screen now works reliably',
      ],
      fr: [
        'Corrigé : Boutons retour affichés correctement en arabe',
        'Corrigé : Redémarrage du tour depuis l\'aide fonctionne correctement',
      ],
      arTN: [
        'تصليح: أزرار الرجوع تظهر صح بالعربي',
        'تصليح: إعادة تشغيل الجولة من المساعدة تخدم صح',
      ],
    },
  },
  {
    version: '1.44.37',
    date: '2026-08-21',
    changes: {
      en: [
        'Improved: Ad timing optimized — fewer interruptions',
        'New: Back buttons added to About, Help, Notifications, and Exchange Rates screens',
        'Fixed: Dashboard transaction menu restored',
      ],
      fr: [
        'Amélioré : Timing des publicités optimisé — moins d\'interruptions',
        'Nouveau : Boutons retour ajoutés sur À propos, Aide, Notifications et Taux de change',
        'Corrigé : Menu transactions du tableau de bord restauré',
      ],
      arTN: [
        'تحسين: توقيت الإعلانات أحسن — أقل مقاطعات',
        'جديد: أزرار رجوع في شاشات حول التطبيق، المساعدة، الإشعارات، وأسعار الصرف',
        'تصليح: قائمة المعاملات في الصفحة الرئيسية رجعت',
      ],
    },
  },
  {
    version: '1.44.36',
    date: '2026-08-18',
    changes: {
      en: [
        'New: First account is gold by default',
        'Improved: Ads wait 10 minutes between displays',
      ],
      fr: [
        'Nouveau : Le premier compte est doré par défaut',
        'Amélioré : Les publicités attendent 10 minutes entre chaque affichage',
      ],
      arTN: [
        'جديد: الحساب الأول يكون ذهبي بالافتراضي',
        'تحسين: الإعلانات تستنى 10 دقائق بين كل عرض',
      ],
    },
  },
  {
    version: '1.44.35',
    date: '2026-08-18',
    changes: {
      en: [
        'Fixed: Transactions screen crash during app tour resolved',
      ],
      fr: [
        'Corrigé : Crash de l\'écran des transactions pendant le tour résolu',
      ],
      arTN: [
        'تصليح: تعطل شاشة المعاملات أثناء الجولة تصلح',
      ],
    },
  },
  {
    version: '1.44.34',
    date: '2026-08-17',
    changes: {
      en: [
        'New: Tour step 8 added — introduces the bottom navigation bar',
        'Improved: Tour steps 4–7 now show full-page overviews of each section',
      ],
      fr: [
        'Nouveau : Étape 8 du tour ajoutée — présente la barre de navigation inférieure',
        'Amélioré : Les étapes 4–7 du tour affichent des aperçus pleine page de chaque section',
      ],
      arTN: [
        'جديد: خطوة 8 في الجولة — تعرّف على شريط التنقل السفلي',
        'تحسين: خطوات 4–7 تعرض نظرة عامة كاملة على كل قسم',
      ],
    },
  },
  {
    version: '1.44.33',
    date: '2026-08-16',
    changes: {
      en: [
        'Fixed: Tour spotlight display issues on Android resolved',
      ],
      fr: [
        'Corrigé : Problèmes d\'affichage du spotlight du tour sur Android résolus',
      ],
      arTN: [
        'تصليح: مشاكل عرض spotlight في الجولة على Android تصلحت',
      ],
    },
  },
  {
    version: '1.44.32',
    date: '2026-08-16',
    changes: {
      en: [
        'Improved: App tour simplified to 7 focused steps',
      ],
      fr: [
        'Amélioré : Tour de l\'application simplifié à 7 étapes ciblées',
      ],
      arTN: [
        'تحسين: جولة التطبيق تبسّطت لـ 7 خطوات مركّزة',
      ],
    },
  },
  {
    version: '1.44.31',
    date: '2026-08-16',
    changes: {
      en: [
        'Fixed: Tour timer and navigation issues resolved',
      ],
      fr: [
        'Corrigé : Problèmes de minuterie et de navigation du tour résolus',
      ],
      arTN: [
        'تصليح: مشاكل المؤقت والتنقل في الجولة تصلحت',
      ],
    },
  },
  {
    version: '1.44.30',
    date: '2026-08-07',
    changes: {
      en: [
        'Fixed: Tour spotlight and tooltip now stay in sync',
      ],
      fr: [
        'Corrigé : Le spotlight et l\'infobulle du tour restent synchronisés',
      ],
      arTN: [
        'تصليح: spotlight والتلميح في الجولة يبقوا متزامنين',
      ],
    },
  },
  {
    version: '1.44.29',
    date: '2026-08-07',
    changes: {
      en: [
        'Improved: App tour streamlined to 16 steps for a faster onboarding experience',
      ],
      fr: [
        'Amélioré : Tour de l\'application rationalisé à 16 étapes pour un onboarding plus rapide',
      ],
      arTN: [
        'تحسين: جولة التطبيق تبسّطت لـ 16 خطوة لتجربة أسرع',
      ],
    },
  },
  {
    version: '1.44.28',
    date: '2026-08-07',
    changes: {
      en: [
        'Improved: App tour now adapts to light and dark mode automatically',
      ],
      fr: [
        'Amélioré : Le tour de l\'application s\'adapte automatiquement au mode clair et sombre',
      ],
      arTN: [
        'تحسين: جولة التطبيق تتكيف تلقائياً مع الوضع الفاتح والداكن',
      ],
    },
  },
  {
    version: '1.44.27',
    date: '2026-08-07',
    changes: {
      en: [
        'New: Gold border ring highlights the active feature during the tour',
      ],
      fr: [
        'Nouveau : Anneau doré met en évidence la fonctionnalité active pendant le tour',
      ],
      arTN: [
        'جديد: حلقة ذهبية تبرز الميزة النشطة أثناء الجولة',
      ],
    },
  },
  {
    version: '1.44.26',
    date: '2026-08-07',
    changes: {
      en: [
        'New: Interactive app tour — launches on first use, restartable from Help',
        'New: Tour progress is saved so you can resume where you left off',
        'New: Tour fully supports Arabic with proper RTL layout',
        'New: Haptic vibration feedback during tour steps',
      ],
      fr: [
        'Nouveau : Tour interactif de l\'application — se lance au premier démarrage, redémarrable depuis l\'Aide',
        'Nouveau : La progression du tour est sauvegardée pour reprendre où vous vous êtes arrêté',
        'Nouveau : Tour entièrement en arabe avec mise en page RTL correcte',
        'Nouveau : Retour haptique pendant les étapes du tour',
      ],
      arTN: [
        'جديد: جولة تفاعلية في التطبيق — تبدأ أول مرة وتقدر تعيد تشغيلها من المساعدة',
        'جديد: تقدم الجولة يتحفظ باش تكمل من وين وقفت',
        'جديد: الجولة تدعم العربي بالكامل مع تخطيط RTL صحيح',
        'جديد: اهتزاز لمسي أثناء خطوات الجولة',
      ],
    },
  },
  {
    version: '1.44.25',
    date: '2026-08-07',
    changes: {
      en: [
        'Fixed: Budget and subscription form crash resolved',
        'Improved: Number format selector is now more compact',
      ],
      fr: [
        'Corrigé : Crash du formulaire budget et abonnement résolu',
        'Amélioré : Sélecteur de format de nombre plus compact',
      ],
      arTN: [
        'تصليح: تعطل نموذج الميزانية والاشتراك تصلح',
        'تحسين: منتقي تنسيق الأرقام أصغر وأنظف',
      ],
    },
  },
  {
    version: '1.44.24',
    date: '2026-08-05',
    changes: {
      en: [
        'Fixed: Number format now applies correctly on Accounts, Subscriptions, and subscription details',
        'Fixed: Pending subscriptions now display in your chosen language and number format',
        'Fixed: Payment history shows amounts in your selected format',
        'New: More number format options available',
        'Changed: Indian number format removed; existing users switched to US/UK format automatically',
        'Improved: Number format picker redesigned with live preview',
        'Improved: Large balances on dashboard now fit on one line',
        'New: You can use comma as decimal separator in all forms',
      ],
      fr: [
        'Corrigé : Le format de nombre s\'applique correctement sur Comptes, Abonnements et détails',
        'Corrigé : Les abonnements en attente s\'affichent dans votre langue et format choisis',
        'Corrigé : L\'historique des paiements affiche les montants dans votre format sélectionné',
        'Nouveau : Plus d\'options de format de nombre disponibles',
        'Changé : Format indien supprimé ; les utilisateurs existants passent automatiquement au format US/UK',
        'Amélioré : Sélecteur de format redessiné avec aperçu en direct',
        'Amélioré : Les grands soldes sur le tableau de bord tiennent sur une ligne',
        'Nouveau : Vous pouvez utiliser la virgule comme séparateur décimal dans tous les formulaires',
      ],
      arTN: [
        'تصليح: تنسيق الأرقام يتطبق صح في الحسابات والاشتراكات والتفاصيل',
        'تصليح: الاشتراكات المعلقة تعرض بلغتك وتنسيقك المختار',
        'تصليح: تاريخ الدفع يعرض المبالغ بتنسيقك المختار',
        'جديد: خيارات تنسيق أرقام أكثر',
        'تغيير: تنسيق الهند حذف؛ المستخدمين الحاليين انتقلوا تلقائياً للتنسيق الأمريكي',
        'تحسين: منتقي التنسيق أعيد تصميمه مع معاينة مباشرة',
        'تحسين: الأرصدة الكبيرة في الصفحة الرئيسية تتناسب في سطر واحد',
        'جديد: تقدر تستعمل الفاصلة كفاصل عشري في كل النماذج',
      ],
    },
  },
  {
    version: '1.44.23',
    date: '2026-08-04',
    changes: {
      en: [
        'Improved: Transaction cards are now uniform across all screens',
        'New: More account colors to choose from — 16 options total',
        'New: 20 new category icons added',
        'New: You can now enter larger amounts (up to 12 digits)',
        'Improved: Settings reorganized into a single Preferences section with number format options',
        'Fixed: Back buttons now work consistently across all screens',
      ],
      fr: [
        'Amélioré : Cartes de transaction uniformes sur tous les écrans',
        'Nouveau : Plus de couleurs de compte — 16 options au total',
        'Nouveau : 20 nouvelles icônes de catégorie ajoutées',
        'Nouveau : Vous pouvez saisir des montants plus grands (jusqu\'à 12 chiffres)',
        'Amélioré : Paramètres réorganisés en une section Préférences avec options de format',
        'Corrigé : Boutons retour fonctionnent de manière cohérente sur tous les écrans',
      ],
      arTN: [
        'تحسين: بطاقات المعاملات موحدة في كل الشاشات',
        'جديد: ألوان حسابات أكثر — 16 خيار',
        'جديد: 20 أيقونة فئة جديدة',
        'جديد: تقدر تدخل مبالغ أكبر (حتى 12 رقم)',
        'تحسين: الإعدادات منظمة في قسم تفضيلات واحد مع خيارات التنسيق',
        'تصليح: أزرار الرجوع تخدم بانتظام في كل الشاشات',
      ],
    },
  },
  {
    version: '1.44.22',
    date: '2026-07-31',
    changes: {
      en: [
        'Fixed: Money calculation corrected when deleting an account with transaction transfer',
        'Fixed: Transfer reversal on delete verified for accuracy',
        'Improved: Transaction cards on dashboard now match the transactions page style',
        'Improved: Budget health calculation unified for multi-currency accounts',
      ],
      fr: [
        'Corrigé : Calcul d\'argent corrigé lors de la suppression d\'un compte avec transfert',
        'Corrigé : Inversion de transfert à la suppression vérifiée pour l\'exactitude',
        'Amélioré : Cartes de transaction du tableau de bord correspondent au style de la page transactions',
        'Amélioré : Calcul de santé du budget unifié pour les comptes multi-devises',
      ],
      arTN: [
        'تصليح: حساب المال صح عند حذف حساب مع تحويل معاملات',
        'تصليح: عكس التحويل عند الحذف تحقق من دقته',
        'تحسين: بطاقات المعاملات في الصفحة الرئيسية تطابق نمط صفحة المعاملات',
        'تحسين: حساب صحة الميزانية موحد للحسابات متعددة العملات',
      ],
    },
  },
  {
    version: '1.44.21',
    date: '2026-07-26',
    changes: {
      en: [
        'New: Deleting an account now removes linked subscriptions (with warning)',
        'New: Option to include or exclude specific accounts from total balance',
        'New: Daily Reminder notification setting restored',
        'New: Amount inputs now respect your currency decimal precision',
        'New: Choose your number format (comma-dot, space-comma, or auto)',
        'New: Category icons added to category list and icon selector',
        'Improved: Transaction cards now show account color accent line',
      ],
      fr: [
        'Nouveau : La suppression d\'un compte supprime les abonnements liés (avec avertissement)',
        'Nouveau : Option pour inclure ou exclure des comptes du solde total',
        'Nouveau : Paramètre de rappel quotidien restauré',
        'Nouveau : Les champs de montant respectent la précision décimale de votre devise',
        'Nouveau : Choisissez votre format de nombre (virgule-point, espace-virgule, ou auto)',
        'Nouveau : Icônes de catégorie ajoutées à la liste et au sélecteur',
        'Amélioré : Cartes de transaction avec ligne d\'accent couleur du compte',
      ],
      arTN: [
        'جديد: حذف حساب يحذف الاشتراكات المرتبطة (مع تحذير)',
        'جديد: خيار لتضمين أو استبعاد حسابات من الرصيد الإجمالي',
        'جديد: إعداد التذكير اليومي رجع',
        'جديد: حقول المبلغ تحترم دقة العملة العشرية',
        'جديد: اختر تنسيق أرقامك (فاصلة-نقطة، مسافة-فاصلة، أو تلقائي)',
        'جديد: أيقونات الفئات في قائمة الفئات ومنتقي الأيقونات',
        'تحسين: بطاقات المعاملات تعرض خط لون الحساب',
      ],
    },
  },
  {
    version: '1.44.20',
    date: '2026-07-25',
    changes: {
      en: [
        'New: Add Account card appears inline when no account is available',
        'New: Tap account card body to edit directly',
        'Improved: Initial balance is locked when editing an account to prevent balance errors',
        'New: Type the account name to confirm before deleting an account',
        'Improved: Back button on Subscription and Budget screens returns to More',
      ],
      fr: [
        'Nouveau : Carte Ajouter un compte apparaît en ligne quand aucun compte n\'est disponible',
        'Nouveau : Appuyez sur la carte du compte pour modifier directement',
        'Amélioré : Le solde initial est verrouillé lors de la modification pour éviter les erreurs',
        'Nouveau : Tapez le nom du compte pour confirmer avant de le supprimer',
        'Amélioré : Bouton retour sur les écrans Abonnement et Budget revient à Plus',
      ],
      arTN: [
        'جديد: بطاقة إضافة حساب تظهر مباشرة عند عدم وجود حسابات',
        'جديد: اضغط على بطاقة الحساب للتعديل مباشرة',
        'تحسين: الرصيد الأولي مقفل عند التعديل لتجنب أخطاء الرصيد',
        'جديد: اكتب اسم الحساب للتأكيد قبل حذفه',
        'تحسين: زر الرجوع في شاشات الاشتراك والميزانية يرجع لـ المزيد',
      ],
    },
  },
  {
    version: '1.44.19',
    date: '2026-07-25',
    changes: {
      en: [
        'Fixed: Copying a transaction now pre-fills the description',
        'Fixed: First ad of a new session now shows reliably',
        'New: Account cards are now compact and grouped by type (Bank, Cash, Wallet, Savings, Meal Voucher)',
        'New: Account edit and delete moved to a menu (tap the 3 dots)',
        'New: Delete account now offers two choices — delete related transactions or move them to another account',
      ],
      fr: [
        'Corrigé : La copie d\'une transaction pré-remplit la description',
        'Corrigé : La première publicité d\'une nouvelle session s\'affiche correctement',
        'Nouveau : Cartes de compte compactes et groupées par type (Banque, Espèces, Portefeuille, Épargne, Ticket Restaurant)',
        'Nouveau : Modification et suppression de compte déplacées dans un menu (3 points)',
        'Nouveau : La suppression d\'un compte propose deux choix — supprimer les transactions liées ou les déplacer',
      ],
      arTN: [
        'تصليح: نسخ معاملة يملأ الوصف مسبقاً',
        'تصليح: أول إعلان في جلسة جديدة يظهر صح',
        'جديد: بطاقات الحسابات مدمجة ومجمعة حسب النوع (بنك، نقد، محفظة، ادخار، قسيمة وجبة)',
        'جديد: تعديل وحذف الحساب انتقلا لقائمة (3 نقاط)',
        'جديد: حذف الحساب يعطيك خيارين — حذف المعاملات المرتبطة أو نقلها لحساب آخر',
      ],
    },
  },
  {
    version: '1.44.18',
    date: '2026-07-24',
    changes: {
      en: [
        'New: Bottom navigation reorganized to Home, Transactions, Accounts, More',
        'New: Transaction cards now have a menu with edit, copy, and delete options',
        'New: Quick shortcut to create categories directly from the subscription form',
        'Fixed: Transfer form field order corrected',
        'Improved: Ads configured for production with delayed first display',
      ],
      fr: [
        'Nouveau : Navigation inférieure réorganisée en Accueil, Transactions, Comptes, Plus',
        'Nouveau : Cartes de transaction avec menu modifier, copier, supprimer',
        'Nouveau : Raccourci rapide pour créer des catégories depuis le formulaire d\'abonnement',
        'Corrigé : Ordre des champs du formulaire de transfert corrigé',
        'Amélioré : Publicités configurées pour la production avec premier affichage différé',
      ],
      arTN: [
        'جديد: التنقل السفلي منظم من جديد: الرئيسية، المعاملات، الحسابات، المزيد',
        'جديد: بطاقات المعاملات عندها قائمة: تعديل، نسخ، حذف',
        'جديد: اختصار سريع لإنشاء الفئات مباشرة من نموذج الاشتراك',
        'تصليح: ترتيب حقول نموذج التحويل صُحح',
        'تحسين: الإعلانات مضبوطة للإنتاج مع تأخير العرض الأول',
      ],
    },
  },
  {
    version: '1.44.17',
    date: '2026-07-12',
    changes: {
      en: [
        'Improved: Language and Arabic direction changes now apply with a single reload (no more double restart)',
        'Fixed: Untranslated "INFO" section header in More menu now shows in all languages',
      ],
      fr: [
        'Amélioré : Les changements de langue et de direction arabe s\'appliquent avec un seul rechargement',
        'Corrigé : L\'en-tête de section "INFO" non traduit dans le menu Plus s\'affiche maintenant dans toutes les langues',
      ],
      arTN: [
        'تحسين: تغييرات اللغة والاتجاه العربي تتطبق بإعادة تحميل واحدة (ما عاد فيه إعادة تشغيل مزدوجة)',
        'تصليح: عنوان قسم "INFO" غير المترجم في قائمة المزيد يظهر الآن بكل اللغات',
      ],
    },
  },
  {
    version: '1.44.16',
    date: '2026-07-12',
    changes: {
      en: [
        'Improved: Suspended subscriptions no longer appear in Upcoming Renewals (reappear on resume)',
        'Improved: Language picker now pre-selects your active language',
        'Fixed: Arabic now applies correctly across the entire app on language change and restart',
      ],
      fr: [
        'Amélioré : Les abonnements suspendus n\'apparaissent plus dans les Renouvellements à venir',
        'Amélioré : Le sélecteur de langue présélectionne votre langue active',
        'Corrigé : L\'arabe s\'applique correctement dans toute l\'application au changement de langue et au redémarrage',
      ],
      arTN: [
        'تحسين: الاشتراكات الموقوفة ما تظهرش في التجديدات القادمة (ترجع عند الاستئناف)',
        'تحسين: منتقي اللغة يختار لغتك الحالية مسبقاً',
        'تصليح: العربي يتطبق صح في كل التطبيق عند تغيير اللغة وإعادة التشغيل',
      ],
    },
  },
  {
    version: '1.44.15',
    date: '2026-07-11',
    changes: {
      en: [
        'Fixed: Tunisian "Shopping" label corrected',
        'Fixed: Arabic alignment fixed for section titles across 6 screens',
        'Improved: Subscription menu is now instant (removed slide animation)',
        'Fixed: Transaction list month names now show correctly in Tunisian',
        'New: Readable calendar weekday labels in Arabic',
        'Improved: More menu reorganized into Overview, Preferences, Save & Restore, and Info sections',
        'Improved: About screen now shows the real Khazinti logo',
      ],
      fr: [
        'Corrigé : Libellé "Shopping" tunisien corrigé',
        'Corrigé : Alignement arabe corrigé pour les titres de section sur 6 écrans',
        'Amélioré : Menu abonnement maintenant instantané (animation de glissement supprimée)',
        'Corrigé : Noms des mois dans la liste des transactions s\'affichent correctement en tunisien',
        'Nouveau : Libellés des jours de la semaine lisibles en arabe dans le calendrier',
        'Amélioré : Menu Plus réorganisé en sections Vue d\'ensemble, Préférences, Sauvegarde & Restauration, et Info',
        'Amélioré : L\'écran À propos affiche maintenant le vrai logo Khazinti',
      ],
      arTN: [
        'تصليح: تسمية "Shopping" التونسية صُحّحت',
        'تصليح: محاذاة العربي صُحّحت لعناوين الأقسام في 6 شاشات',
        'تحسين: قائمة الاشتراك فورية الآن (حذف الرسوم المتحركة)',
        'تصليح: أسماء الأشهر في قائمة المعاملات تظهر صح بالتونسي',
        'جديد: تسميات أيام الأسبوع مقروءة بالعربي في التقويم',
        'تحسين: قائمة المزيد منظمة في أقسام: نظرة عامة، تفضيلات، حفظ واستعادة، ومعلومات',
        'تحسين: شاشة حول التطبيق تعرض الآن شعار Khazinti الحقيقي',
      ],
    },
  },
  {
    version: '1.44.14',
    date: '2026-07-11',
    changes: {
      en: [
        'Fixed: Arabic layout corrected in subscription pending cards',
        'Improved: Smoother scrolling in transaction list',
        'Improved: Stronger security for biometric and PIN lock',
        'Improved: Better translations across the app',
      ],
      fr: [
        'Corrigé : Mise en page arabe corrigée dans les cartes d\'abonnement en attente',
        'Amélioré : Défilement plus fluide dans la liste des transactions',
        'Amélioré : Sécurité renforcée pour le verrouillage biométrique et PIN',
        'Amélioré : Meilleures traductions dans toute l\'application',
      ],
      arTN: [
        'تصليح: تخطيط العربي صُحّح في بطاقات الاشتراكات المعلقة',
        'تحسين: تمرير أسلس في قائمة المعاملات',
        'تحسين: أمان أقوى للقفل البيومتري والـ PIN',
        'تحسين: ترجمات أفضل في كل التطبيق',
      ],
    },
  },
  {
    version: '1.44.13',
    date: '2026-07-07',
    changes: {
      en: [
        'Fixed: Large transaction and low balance alerts now work for accounts in different currencies',
        'Fixed: Phantom budget alerts no longer appear when changing notification settings',
      ],
      fr: [
        'Corrigé : Les alertes de grande transaction et de solde bas fonctionnent pour les comptes en devises différentes',
        'Corrigé : Les fausses alertes de budget n\'apparaissent plus lors du changement des paramètres de notification',
      ],
      arTN: [
        'تصليح: تنبيهات المعاملات الكبيرة والرصيد المنخفض تخدم الآن للحسابات بعملات مختلفة',
        'تصليح: تنبيهات الميزانية الوهمية ما تظهرش عند تغيير إعدادات الإشعارات',
      ],
    },
  },
  {
    version: '1.44.12',
    date: '2026-07-05',
    changes: {
      en: [
        'New: Suspended subscriptions no longer receive payment reminders',
        'Improved: Budget alerts now also check when you open the app',
        'Fixed: Daily summary notification shows correct totals',
      ],
      fr: [
        'Nouveau : Les abonnements suspendus ne reçoivent plus de rappels de paiement',
        'Amélioré : Les alertes de budget vérifient maintenant aussi à l\'ouverture de l\'application',
        'Corrigé : La notification de résumé quotidien affiche les totaux corrects',
      ],
      arTN: [
        'جديد: الاشتراكات الموقوفة ما تستقبلش تذكيرات دفع',
        'تحسين: تنبيهات الميزانية تتحقق أيضاً عند فتح التطبيق',
        'تصليح: إشعار الملخص اليومي يعرض الإجماليات الصحيحة',
      ],
    },
  },
  {
    version: '1.44.11',
    date: '2026-07-05',
    changes: {
      en: [
        'Fixed: Notification currency display corrected across all alert types',
        'Improved: Cleaner settings layout with better section organization',
        'Fixed: Subscription payment reminders now show the correct currency symbol',
      ],
      fr: [
        'Corrigé : Affichage de la devise dans les notifications corrigé pour tous les types d\'alerte',
        'Amélioré : Mise en page des paramètres plus propre avec une meilleure organisation des sections',
        'Corrigé : Les rappels de paiement d\'abonnement affichent maintenant le bon symbole de devise',
      ],
      arTN: [
        'تصليح: عرض العملة في الإشعارات صُحّح لكل أنواع التنبيهات',
        'تحسين: تخطيط الإعدادات أنظف مع تنظيم أفضل للأقسام',
        'تصليح: تذكيرات دفع الاشتراك تعرض الآن رمز العملة الصحيح',
      ],
    },
  },
  {
    version: '1.44.10',
    date: '2026-06-21',
    changes: {
      en: [
        'Fixed: Subscription reminder notifications now show the correct currency symbol',
        'Fixed: Large transaction alert now shows your actual spending amount',
        'Fixed: Low balance alerts and daily summaries display accurate amounts and currencies',
      ],
      fr: [
        'Corrigé : Les notifications de rappel d\'abonnement affichent maintenant le bon symbole de devise',
        'Corrigé : L\'alerte de grande transaction affiche maintenant votre montant réel dépensé',
        'Corrigé : Les alertes de solde bas et les résumés quotidiens affichent des montants et devises précis',
      ],
      arTN: [
        'تصليح: إشعارات تذكير الاشتراك تعرض الآن رمز العملة الصحيح',
        'تصليح: تنبيه المعاملة الكبيرة يعرض الآن مبلغ إنفاقك الفعلي',
        'تصليح: تنبيهات الرصيد المنخفض والملخصات اليومية تعرض مبالغ وعملات دقيقة',
      ],
    },
  },
  {
    version: '1.44.09',
    date: '2026-06-19',
    changes: {
      en: [
        'Fixed: Budget limit notifications now trigger reliably when spending increases',
        'Fixed: Large transaction alerts accurately display the transaction details',
        'Improved: Daily totals correctly convert transactions across different currencies',
      ],
      fr: [
        'Corrigé : Les notifications de limite de budget se déclenchent maintenant de manière fiable',
        'Corrigé : Les alertes de grande transaction affichent avec précision les détails',
        'Amélioré : Les totaux quotidiens convertissent correctement les transactions en différentes devises',
      ],
      arTN: [
        'تصليح: إشعارات حد الميزانية تنطلق بشكل موثوق عند زيادة الإنفاق',
        'تصليح: تنبيهات المعاملات الكبيرة تعرض التفاصيل بدقة',
        'تحسين: الإجماليات اليومية تحول المعاملات بشكل صحيح عبر العملات المختلفة',
      ],
    },
  },
  {
    version: '1.44.08',
    date: '2026-06-17',
    changes: {
      en: [
        'Fixed: Suspended subscriptions no longer receive payment reminders or overdue alerts',
        'Improved: Budget alert checks now run automatically each time you open the app',
        'New: Transactions grouped by day with daily spending totals',
        'Fixed: Calendar view displays accurate daily totals converted to your main currency',
        'Changed: Expenses by category moved to Statistics screen for a cleaner dashboard',
      ],
      fr: [
        'Corrigé : Les abonnements suspendus ne reçoivent plus de rappels de paiement ni d\'alertes de retard',
        'Amélioré : Les vérifications d\'alerte de budget s\'exécutent automatiquement à chaque ouverture',
        'Nouveau : Transactions groupées par jour avec totaux de dépenses quotidiens',
        'Corrigé : La vue calendrier affiche des totaux quotidiens précis convertis dans votre devise principale',
        'Changé : Dépenses par catégorie déplacées vers l\'écran Statistiques pour un tableau de bord plus propre',
      ],
      arTN: [
        'تصليح: الاشتراكات الموقوفة ما تستقبلش تذكيرات دفع أو تنبيهات تأخر',
        'تحسين: فحوصات تنبيه الميزانية تعمل تلقائياً في كل مرة تفتح فيها التطبيق',
        'جديد: المعاملات مجمعة حسب اليوم مع إجماليات الإنفاق اليومية',
        'تصليح: عرض التقويم يعرض إجماليات يومية دقيقة محولة لعملتك الرئيسية',
        'تغيير: المصروفات حسب الفئة انتقلت لشاشة الإحصائيات لتنظيف الصفحة الرئيسية',
      ],
    },
  },
  {
    version: '1.44.07',
    date: '2026-06-16',
    changes: {
      en: [
        'Fixed: Budget alerts now fire progressively across all thresholds',
        'Fixed: Subscription payment reminders now fire reliably on the correct day',
        'Fixed: Large transaction alert compares expenses in your main currency',
        'Improved: Budget summary card redesigned with a cleaner layout',
      ],
      fr: [
        'Corrigé : Les alertes de budget se déclenchent progressivement sur tous les seuils',
        'Corrigé : Les rappels de paiement d\'abonnement se déclenchent de manière fiable le bon jour',
        'Corrigé : L\'alerte de grande transaction compare les dépenses dans votre devise principale',
        'Amélioré : Carte de résumé de budget redessinée avec une mise en page plus propre',
      ],
      arTN: [
        'تصليح: تنبيهات الميزانية تنطلق تدريجياً عبر كل الحدود',
        'تصليح: تذكيرات دفع الاشتراك تنطلق بشكل موثوق في اليوم الصحيح',
        'تصليح: تنبيه المعاملة الكبيرة يقارن المصروفات بعملتك الرئيسية',
        'تحسين: بطاقة ملخص الميزانية أعيد تصميمها بتخطيط أنظف',
      ],
    },
  },
  {
    version: '1.44.06',
    date: '2026-06-15',
    changes: {
      en: [
        'Fixed: Budget alerts now work accurately for accounts in all currencies',
        'Fixed: Prevented creating budgets for past months',
        'Improved: Budget cards now clearly show remaining amount and progress status',
      ],
      fr: [
        'Corrigé : Les alertes de budget fonctionnent avec précision pour les comptes dans toutes les devises',
        'Corrigé : Empêche la création de budgets pour les mois passés',
        'Amélioré : Les cartes de budget affichent clairement le montant restant et le statut de progression',
      ],
      arTN: [
        'تصليح: تنبيهات الميزانية تخدم بدقة للحسابات بكل العملات',
        'تصليح: منع إنشاء ميزانيات للأشهر الماضية',
        'تحسين: بطاقات الميزانية تعرض بوضوح المبلغ المتبقي وحالة التقدم',
      ],
    },
  },
  {
    version: '1.44.05',
    date: '2026-06-15',
    changes: {
      en: [
        'Improved: Cleaner transactions screen with simplified filtering options',
        'Changed: Date range filter moved into the filter menu for a more spacious layout',
        'Fixed: Daily totals show accurate converted amounts when using multiple currencies',
      ],
      fr: [
        'Amélioré : Écran des transactions plus propre avec des options de filtrage simplifiées',
        'Changé : Filtre de plage de dates déplacé dans le menu de filtre pour une mise en page plus spacieuse',
        'Corrigé : Les totaux quotidiens affichent des montants convertis précis avec plusieurs devises',
      ],
      arTN: [
        'تحسين: شاشة المعاملات أنظف مع خيارات تصفية مبسطة',
        'تغيير: فلتر نطاق التاريخ انتقل لقائمة الفلتر لتخطيط أكثر اتساعاً',
        'تصليح: الإجماليات اليومية تعرض مبالغ محولة دقيقة عند استخدام عملات متعددة',
      ],
    },
  },
  {
    version: '1.44.04',
    date: '2026-06-15',
    changes: {
      en: [
        'Fixed: Notification alert fields — keyboard no longer closes while typing threshold amounts',
      ],
      fr: [
        'Corrigé : Champs d\'alerte de notification — le clavier ne se ferme plus lors de la saisie des montants seuil',
      ],
      arTN: [
        'تصليح: حقول تنبيه الإشعارات — لوحة المفاتيح ما تقفلش عند كتابة مبالغ الحد',
      ],
    },
  },
  {
    version: '1.44.03',
    date: '2026-06-14',
    changes: {
      en: [
        'Fixed: Transaction screen crash ("Rendered fewer hooks than expected") resolved',
        'Fixed: Notification alert fields — keyboard no longer dismisses while typing threshold amounts',
      ],
      fr: [
        'Corrigé : Crash de l\'écran des transactions résolu',
        'Corrigé : Champs d\'alerte de notification — le clavier ne se ferme plus lors de la saisie',
      ],
      arTN: [
        'تصليح: تعطل شاشة المعاملات تصلح',
        'تصليح: حقول تنبيه الإشعارات — لوحة المفاتيح ما تختفيش عند الكتابة',
      ],
    },
  },
  {
    version: '1.44.02',
    date: '2026-06-14',
    changes: {
      en: [
        'Fixed: Transaction screen crash on open resolved',
        'Fixed: Notification threshold fields — keyboard no longer closes while typing',
        'Fixed: Subscription card bell icon removed to reclaim card space',
      ],
      fr: [
        'Corrigé : Crash de l\'écran des transactions à l\'ouverture résolu',
        'Corrigé : Champs de seuil de notification — le clavier ne se ferme plus lors de la saisie',
        'Corrigé : Icône de cloche de la carte d\'abonnement supprimée pour récupérer de l\'espace',
      ],
      arTN: [
        'تصليح: تعطل شاشة المعاملات عند الفتح تصلح',
        'تصليح: حقول حد الإشعارات — لوحة المفاتيح ما تقفلش عند الكتابة',
        'تصليح: أيقونة الجرس في بطاقة الاشتراك حُذفت لاستعادة مساحة البطاقة',
      ],
    },
  },
  {
    version: '1.44.01',
    date: '2026-06-14',
    changes: {
      en: [
        'Fixed: Transaction screen crash on open resolved',
        'Fixed: Notification threshold fields — keyboard no longer closes while typing',
        'Fixed: Subscriptions tab icon updated to CalendarClock',
        'Fixed: Budget FAB button icon changed to Target',
        'Fixed: Big transaction notification now shows the actual transaction amount and threshold correctly',
        'Fixed: FAB touch target clipping on Android fixed',
      ],
      fr: [
        'Corrigé : Crash de l\'écran des transactions résolu',
        'Corrigé : Champs de seuil de notification — le clavier ne se ferme plus',
        'Corrigé : Icône de l\'onglet Abonnements mise à jour',
        'Corrigé : Icône du bouton FAB Budget changée',
        'Corrigé : La notification de grande transaction affiche maintenant le montant et le seuil corrects',
        'Corrigé : Clipping de la cible tactile FAB sur Android corrigé',
      ],
      arTN: [
        'تصليح: تعطل شاشة المعاملات تصلح',
        'تصليح: حقول حد الإشعارات — لوحة المفاتيح ما تقفلش',
        'تصليح: أيقونة تبويب الاشتراكات محدّثة',
        'تصليح: أيقونة زر FAB الميزانية تغيرت',
        'تصليح: إشعار المعاملة الكبيرة يعرض الآن المبلغ والحد الصحيحين',
        'تصليح: قطع هدف اللمس FAB على Android تصلح',
      ],
    },
  },
  {
    version: '1.44.00',
    date: '2026-06-12',
    changes: {
      en: [
        'New: Transaction Filter Sheet — filter by date range, accounts, categories, type, and amount range',
        'New: Account quick-filter chips — one-tap account filtering above the transaction list',
        'New: View mode toggle — switch between List, Grid, and Calendar views (saved across sessions)',
        'New: Grid view — compact 2-column card layout for at-a-glance browsing',
        'New: Calendar view — monthly grid showing daily income/expense totals; tap a day to filter',
        'New: Daily totals in section headers — each date group shows its +income and −expense total',
      ],
      fr: [
        'Nouveau : Feuille de filtre de transactions — filtrez par plage de dates, comptes, catégories, type et montant',
        'Nouveau : Chips de filtre rapide de compte — filtrage d\'un compte en un tap au-dessus de la liste',
        'Nouveau : Bascule de mode de vue — basculez entre les vues Liste, Grille et Calendrier (sauvegardées)',
        'Nouveau : Vue Grille — mise en page compacte à 2 colonnes pour une navigation rapide',
        'Nouveau : Vue Calendrier — grille mensuelle avec totaux quotidiens revenus/dépenses ; appuyez sur un jour pour filtrer',
        'Nouveau : Totaux quotidiens dans les en-têtes de section — chaque groupe de dates affiche son total +revenu et −dépense',
      ],
      arTN: [
        'جديد: ورقة فلتر المعاملات — فلتر حسب نطاق التاريخ، الحسابات، الفئات، النوع، ونطاق المبلغ',
        'جديد: رقائق فلتر الحساب السريع — فلترة حساب بضغطة واحدة فوق قائمة المعاملات',
        'جديد: تبديل وضع العرض — تبديل بين عرض القائمة والشبكة والتقويم (محفوظ بين الجلسات)',
        'جديد: عرض الشبكة — تخطيط بطاقة مدمج بعمودين للتصفح السريع',
        'جديد: عرض التقويم — شبكة شهرية تعرض إجماليات الدخل/المصروف اليومية؛ اضغط على يوم للفلترة',
        'جديد: الإجماليات اليومية في رؤوس الأقسام — كل مجموعة تواريخ تعرض إجمالي +الدخل و−المصروف',
      ],
    },
  },
  {
    version: '1.43.01',
    date: '2026-06-12',
    changes: {
      en: [
        'Fixed: Action button (FAB) tap targets optimized to prevent mis-clicks',
        'Fixed: Action button backdrop correctly blocks background tap interactions',
        'Fixed: Subscription reminder days chips layout wraps correctly on narrow screens',
        'Fixed: Budget alert threshold inputs keep keyboard focus while typing',
        'Fixed: Currency suffixes displayed correctly next to notification threshold settings',
        'Fixed: Subscription reminder notifications now display correct icon',
        'Fixed: Low balance alerts with automated cross-currency conversion',
        'Fixed: Budget threshold alerts correctly restricted to the current month',
        'New: Configurable budget alert threshold percentages (50%, 75%, 90%, 100%)',
        'New: Individual notification deletion from history logs list',
      ],
      fr: [
        'Corrigé : Cibles de tap du bouton d\'action optimisées pour éviter les mauvais clics',
        'Corrigé : L\'arrière-plan du bouton d\'action bloque correctement les interactions en arrière-plan',
        'Corrigé : La mise en page des chips de jours de rappel d\'abonnement s\'adapte correctement',
        'Corrigé : Les champs de seuil d\'alerte de budget gardent le focus du clavier',
        'Corrigé : Suffixes de devise affichés correctement dans les paramètres de seuil',
        'Corrigé : Les notifications de rappel d\'abonnement affichent maintenant la bonne icône',
        'Corrigé : Alertes de solde bas avec conversion automatique entre devises',
        'Corrigé : Alertes de seuil de budget correctement restreintes au mois en cours',
        'Nouveau : Pourcentages de seuil d\'alerte de budget configurables (50%, 75%, 90%, 100%)',
        'Nouveau : Suppression individuelle de notification depuis la liste des journaux',
      ],
      arTN: [
        'تصليح: أهداف الضغط لزر الإجراء محسّنة لمنع النقرات الخاطئة',
        'تصليح: خلفية زر الإجراء تحجب تفاعلات الخلفية بشكل صحيح',
        'تصليح: تخطيط رقائق أيام تذكير الاشتراك يلتف بشكل صحيح على الشاشات الضيقة',
        'تصليح: حقول حد تنبيه الميزانية تحتفظ بتركيز لوحة المفاتيح أثناء الكتابة',
        'تصليح: لاحقات العملة تعرض بشكل صحيح بجانب إعدادات الحد',
        'تصليح: إشعارات تذكير الاشتراك تعرض الآن الأيقونة الصحيحة',
        'تصليح: تنبيهات الرصيد المنخفض مع تحويل تلقائي بين العملات',
        'تصليح: تنبيهات حد الميزانية مقيدة بشكل صحيح بالشهر الحالي',
        'جديد: نسب حد تنبيه الميزانية قابلة للتكوين (50%، 75%، 90%، 100%)',
        'جديد: حذف إشعار فردي من قائمة سجلات التاريخ',
      ],
    },
  },
  {
    version: '1.42.02',
    date: '2026-06-09',
    changes: {
      en: [
        'Fixed: Transaction cards no longer respond to swipe-left (only swipe-right to delete)',
        'Fixed: Removed blue square artifact behind the action button on Android',
        'Improved: Action button menu redesigned with gold accent line, larger tap targets, rounded icon badges',
      ],
      fr: [
        'Corrigé : Les cartes de transaction ne répondent plus au glissement vers la gauche (seulement vers la droite pour supprimer)',
        'Corrigé : Artefact carré bleu derrière le bouton d\'action sur Android supprimé',
        'Amélioré : Menu du bouton d\'action redessiné avec ligne d\'accent dorée, cibles plus grandes, badges d\'icône arrondis',
      ],
      arTN: [
        'تصليح: بطاقات المعاملات ما تستجيبش للسحب لليسار (فقط لليمين للحذف)',
        'تصليح: مربع أزرق خلف زر الإجراء على Android حُذف',
        'تحسين: قائمة زر الإجراء أعيد تصميمها بخط ذهبي، أهداف أكبر، شارات أيقونة مستديرة',
      ],
    },
  },
  {
    version: '1.42.01',
    date: '2026-06-08',
    changes: {
      en: [
        'Fixed: Transaction cards now fully follow light and dark theme',
        'Fixed: Dashboard hero card adapts to light mode with proper gradients and text colors',
        'Fixed: ConfirmSheet dialog matches your chosen theme',
        'Improved: FAB shadow changed to neutral black for a cleaner look',
        'Improved: FAB action chips redesigned with fused icon+label layout, RTL-aware',
        'Improved: FAB idle pulse animation removed for instant tap response',
        'New: Active subscriptions show "in X days" badge with full i18n support (EN/FR/arTN)',
      ],
      fr: [
        'Corrigé : Les cartes de transaction suivent maintenant entièrement le thème clair et sombre',
        'Corrigé : La carte héro du tableau de bord s\'adapte au mode clair avec des dégradés et couleurs de texte appropriés',
        'Corrigé : La boîte de dialogue ConfirmSheet correspond à votre thème choisi',
        'Amélioré : Ombre du FAB changée en noir neutre pour un aspect plus propre',
        'Amélioré : Chips d\'action FAB redessinées avec mise en page icône+étiquette fusionnée, compatible RTL',
        'Amélioré : Animation de pulsation inactive du FAB supprimée pour une réponse instantanée',
        'Nouveau : Les abonnements actifs affichent un badge "dans X jours" avec support i18n complet',
      ],
      arTN: [
        'تصليح: بطاقات المعاملات تتبع الآن الوضع الفاتح والداكن بالكامل',
        'تصليح: بطاقة الصفحة الرئيسية تتكيف مع الوضع الفاتح بتدرجات وألوان نص مناسبة',
        'تصليح: مربع حوار ConfirmSheet يطابق الوضع المختار',
        'تحسين: ظل FAB تغير للأسود المحايد لمظهر أنظف',
        'تحسين: رقائق إجراء FAB أعيد تصميمها بتخطيط أيقونة+تسمية مدمج، متوافق مع RTL',
        'تحسين: رسوم متحركة نبض FAB الخاملة حُذفت للاستجابة الفورية',
        'جديد: الاشتراكات النشطة تعرض شارة "في X أيام" مع دعم i18n كامل',
      ],
    },
  },
  {
    version: '1.42.00',
    date: '2026-06-08',
    changes: {
      en: [
        'New: Swipe gestures now show icons — trash when deleting, pause/play when suspending or reactivating a subscription',
        'New: Transaction cards support swipe-to-delete, consistent with subscriptions',
        'Improved: Action button (FAB) completely redesigned — vertical list layout, bottom-right position, smooth animation',
        'Improved: Action button pulse animation only plays when idle — stops on tap',
        'Improved: Tapping an action button now opens the form immediately with no delay',
      ],
      fr: [
        'Nouveau : Les gestes de glissement affichent maintenant des icônes — corbeille pour supprimer, pause/lecture pour suspendre ou réactiver un abonnement',
        'Nouveau : Les cartes de transaction supportent le glissement pour supprimer, cohérent avec les abonnements',
        'Amélioré : Bouton d\'action (FAB) complètement redessiné — liste verticale, position en bas à droite, animation fluide',
        'Amélioré : L\'animation de pulsation du bouton d\'action ne joue que lorsqu\'il est inactif',
        'Amélioré : Appuyer sur un bouton d\'action ouvre maintenant le formulaire immédiatement',
      ],
      arTN: [
        'جديد: إيماءات السحب تعرض الآن أيقونات — سلة للحذف، إيقاف مؤقت/تشغيل لتعليق أو إعادة تفعيل اشتراك',
        'جديد: بطاقات المعاملات تدعم السحب للحذف، متسقة مع الاشتراكات',
        'تحسين: زر الإجراء (FAB) أعيد تصميمه بالكامل — تخطيط قائمة عمودية، موضع أسفل اليمين، رسوم متحركة سلسة',
        'تحسين: رسوم متحركة نبض زر الإجراء تعمل فقط عند الخمول — تتوقف عند الضغط',
        'تحسين: الضغط على زر إجراء يفتح النموذج فوراً بدون تأخير',
      ],
    },
  },
  {
    version: '1.41.11',
    date: '2026-06-07',
    changes: {
      en: [
        'Fixed: Notification alerts and pop-up messages now match your chosen light or dark theme',
        'Fixed: Dashboard cards and interface screens match theme preferences properly',
        'Fixed: Back navigation button behavior improved on all screens',
        'Improved: More compact form layouts for transactions, accounts, budgets, and subscriptions',
      ],
      fr: [
        'Corrigé : Les alertes de notification et messages contextuels correspondent maintenant à votre thème clair ou sombre',
        'Corrigé : Les cartes du tableau de bord et les écrans d\'interface correspondent correctement aux préférences de thème',
        'Corrigé : Comportement du bouton de navigation retour amélioré sur tous les écrans',
        'Amélioré : Mises en page de formulaire plus compactes pour les transactions, comptes, budgets et abonnements',
      ],
      arTN: [
        'تصليح: تنبيهات الإشعارات والرسائل المنبثقة تطابق الآن الوضع الفاتح أو الداكن المختار',
        'تصليح: بطاقات الصفحة الرئيسية وشاشات الواجهة تطابق تفضيلات الوضع بشكل صحيح',
        'تصليح: سلوك زر التنقل للخلف محسّن على جميع الشاشات',
        'تحسين: تخطيطات نماذج أكثر إحكاماً للمعاملات والحسابات والميزانيات والاشتراكات',
      ],
    },
  },
  {
    version: '1.41.00',
    date: '2026-05-10',
    changes: {
      en: [
        'Added: AdMob interstitial ads (Premium users skip all ads)',
        'Added: Google UMP GDPR consent form',
        'Added: Premium status visible in Settings',
        'Fixed: Android splash screen flash (unified native and JS splash)',
      ],
      fr: [
        'Ajouté : Publicités interstitielles AdMob (Les utilisateurs Premium sans publicités)',
        'Ajouté : Formulaire de consentement GDPR Google UMP',
        'Ajouté : Statut Premium visible dans les Paramètres',
        'Corrigé : Clignotement de l\'écran de démarrage Android',
      ],
      arTN: [
        'جديد: إشهارات AdMob (البريميوم ما يشوفوش إشهارات)',
        'جديد: نموذج موافقة GDPR Google UMP',
        'جديد: حالة البريميوم في الإعدادات',
        'تصليح: مشكلة شاشة البداية في Android',
      ],
    },
  },
  {
    version: '1.40.04',
    date: '2026-05-10',
    changes: {
      en: [
        'Fixed: Toast now right-aligned in Arabic',
        'Fixed: Subscription dates consistent between Dashboard and Subscriptions page',
        'Fixed: Pending cards now full width',
        'Fixed: Budget amounts no longer overflow card',
        'Fixed: Offline currency no longer shows wrong amounts',
        'Improved: Budget progress bar colors follow spending percentage',
      ],
      fr: [
        'Corrigé : Toast aligné à droite en arabe',
        'Corrigé : Dates cohérentes entre Dashboard et page Abonnements',
        'Corrigé : Cartes en attente pleine largeur',
        'Corrigé : Montants budget ne débordent plus',
        'Corrigé : Devise hors-ligne n\'affiche plus de montants erronés',
        'Amélioré : Couleurs barre de progression budget selon le % consommé',
      ],
      arTN: [
        'تصليح: التنبيهات تتحاذى لليمين بالعربي',
        'تصليح: التواريخ متوافقة بين الصفحة الرئيسية وصفحة الاشتراكات',
        'تصليح: كروت الانتظار تأخذ العرض الكامل',
        'تصليح: المبالغ الكبيرة ما تخرجش من الكارت',
        'تصليح: العملة بدون انترنت ما تعطيش مبالغ غلط',
        'تحسين: ألوان شريط الميزانية حسب نسبة الاستهلاك',
      ],
    },
  },
  {
    version: '1.40.03',
    date: '2026-05-07',
    changes: {
      en: [
        'Unified notification system (single bottom toast)',
        'Fixed text truncation in notifications',
        'Fixed RTL layout for Arabic (toast + subscription cards)',
        'Fixed date locale (French months display correctly)',
        'Fixed daily subscription billing date timezone issue',
        'Added input length limits on all form fields',
      ],
      fr: [
        'Système de notification unifié (toast unique en bas)',
        'Correction de la troncature du texte dans les notifications',
        'Correction de la mise en page RTL pour l\'arabe (toast + cartes d\'abonnement)',
        'Correction du locale de date (mois français s\'affichent correctement)',
        'Correction du problème de fuseau horaire pour la date de facturation quotidienne',
        'Ajout de limites de longueur sur tous les champs de formulaire',
      ],
      arTN: [
        'نظام إشعارات موحد (toast واحد في الأسفل)',
        'تصليح اقتطاع النص في الإشعارات',
        'تصليح تخطيط RTL للعربي (toast + كروت الاشتراك)',
        'تصليح locale التاريخ (الأشهر الفرنسية تعرض صح)',
        'تصليح مشكلة المنطقة الزمنية لتاريخ الفاتورة اليومية',
        'إضافة حدود طول المدخلات في كل حقول النماذج',
      ],
    },
  },
  {
    version: '1.40.2',
    date: '2026-05-03',
    changes: {
      en: [
        'Fixed: Subscription toast raw keys resolved',
        'Fixed: Transaction timestamps corrected',
        'Fixed: Pending scroll issue resolved',
        'Fixed: Billing date display corrected',
        'New: Optional category selector in subscription form',
      ],
      fr: [
        'Corrigé : Clés brutes du toast d\'abonnement résolues',
        'Corrigé : Horodatages des transactions corrigés',
        'Corrigé : Problème de défilement en attente résolu',
        'Corrigé : Affichage de la date de facturation corrigé',
        'Nouveau : Sélecteur de catégorie optionnel dans le formulaire d\'abonnement',
      ],
      arTN: [
        'تصليح: مفاتيح toast الاشتراك الخام تصلحت',
        'تصليح: طوابع وقت المعاملات صُحّحت',
        'تصليح: مشكلة التمرير المعلق تصلحت',
        'تصليح: عرض تاريخ الفاتورة صُحّح',
        'جديد: منتقي الفئة اختياري في نموذج الاشتراك',
      ],
    },
  },
  {
    version: '1.40.1',
    date: '2026-05-02',
    changes: {
      en: [
        'Fixed: Confirm button issue resolved',
        'New: Real-time pending subscription updates',
        'New: Confirm/Skip actions on Subscriptions tab',
      ],
      fr: [
        'Corrigé : Problème de bouton de confirmation résolu',
        'Nouveau : Mises à jour en temps réel des abonnements en attente',
        'Nouveau : Actions Confirmer/Ignorer sur l\'onglet Abonnements',
      ],
      arTN: [
        'تصليح: مشكلة زر التأكيد تصلحت',
        'جديد: تحديثات فورية للاشتراكات المعلقة',
        'جديد: إجراءات تأكيد/تخطي في تبويب الاشتراكات',
      ],
    },
  },
  {
    version: '1.40.0',
    date: '2026-05-01',
    changes: {
      en: [
        'New: Manual subscription confirmation — you decide when to record a payment',
        'New: Pending Subscriptions Dashboard section',
        'Fixed: Billing date save issue resolved',
        'Changed: No more auto-processing of subscription payments',
      ],
      fr: [
        'Nouveau : Confirmation manuelle des abonnements — vous décidez quand enregistrer un paiement',
        'Nouveau : Section Abonnements en attente sur le tableau de bord',
        'Corrigé : Problème de sauvegarde de la date de facturation résolu',
        'Changé : Plus de traitement automatique des paiements d\'abonnement',
      ],
      arTN: [
        'جديد: تأكيد يدوي للاشتراكات — أنت تقرر متى تسجل الدفع',
        'جديد: قسم الاشتراكات المعلقة في الصفحة الرئيسية',
        'تصليح: مشكلة حفظ تاريخ الفاتورة تصلحت',
        'تغيير: ما عاد فيه معالجة تلقائية لمدفوعات الاشتراك',
      ],
    },
  },
  {
    version: '1.39.31',
    date: '2026-05-01',
    changes: {
      en: [
        'Improved: LTR number entry with currency symbol on the right',
      ],
      fr: [
        'Amélioré : Saisie de nombre LTR avec symbole de devise à droite',
      ],
      arTN: [
        'تحسين: إدخال الأرقام LTR مع رمز العملة على اليمين',
      ],
    },
  },
  {
    version: '1.39.30',
    date: '2026-05-01',
    changes: {
      en: [
        'New: Dashboard now shows current month context',
        'Fixed: Arabic cursor positioning issue resolved',
      ],
      fr: [
        'Nouveau : Le tableau de bord affiche maintenant le contexte du mois en cours',
        'Corrigé : Problème de positionnement du curseur arabe résolu',
      ],
      arTN: [
        'جديد: الصفحة الرئيسية تعرض الآن سياق الشهر الحالي',
        'تصليح: مشكلة موضع المؤشر العربي تصلحت',
      ],
    },
  },
  {
    version: '1.39.29',
    date: '2026-05-01',
    changes: {
      en: [
        'Fixed: Budget now blocks duplicate category in recurring mode',
        'Fixed: Gold cursor visible on all form fields',
        'Fixed: Category name placeholder now translated in all languages',
        'Moved: Factory reset relocated from More to Settings',
        'Changed: Replaced pig icon with target (budgets) and vault (savings)',
        'Added: Dashboard now shows current month context (e.g. "May 2026")',
        'Polish: Gold border on focused inputs , all 5 forms',
        'Polish: DETAILS divider added to transaction form',
        'Polish: OVERVIEW label inverted , month is now the visual anchor',
      ],
      fr: [
        'Corrigé : Le budget bloque maintenant les doublons de catégorie en mode récurrent',
        'Corrigé : Curseur doré visible sur tous les champs de saisie',
        'Corrigé : Placeholder du nom de catégorie traduit dans toutes les langues',
        'Déplacé : Réinitialisation usine déplacée de Plus vers Paramètres',
        'Changé : Icône cochon remplacée par cible (budgets) et coffre (épargne)',
        'Ajouté : Le tableau de bord affiche le mois en cours (ex : « mai 2026 »)',
        'Polissage : Bordure dorée sur les champs actifs , tous les 5 formulaires',
        'Polissage : Séparateur DÉTAILS ajouté au formulaire de transaction',
        'Polissage : Le mois est maintenant l’ancre visuelle du tableau de bord',
      ],
      arTN: [
        'تصليح: الميزانية تمنع تكرار التصنيف في الوضع المتكرر',
        'تصليح: المؤشر الذهبي يبان في كل الحقول',
        'تصليح: placeholder متاع اسم التصنيف مترجم بكل اللغات',
        'نقل: إعادة التهيئة تنقلت من أكثر لـ الإعدادات',
        'تبديل: أيقونة الحلّوف تبدلت بهدف (ميزانيات) وخزنة (ادخار)',
        'جديد: لوحة القيادة تبيّن الشهر الحالي (مثلاً: « ماي 2026 »)',
        'تلميع: حدود ذهبية عند التركيز على الحقول في كل الفورمات',
        'تلميع: فاصل التفاصيل زيد في فورم المعاملات',
        'تلميع: الشهر صار هو المرجع البصري في لوحة القيادة',
      ],
    },
  },
  {
    version: '1.39.28',
    date: '2026-04-30',
    changes: {
      en: [
        'Improved: Migrated account, budget, subscription, and transaction forms to full-page screens',
        'Removed: Bottom sheet dependency for smoother navigation and better keyboard handling',
      ],
      fr: [
        'Amélioré : Migration des formulaires de compte, budget, abonnement et transaction vers des écrans complets',
        'Supprimé : Dépendance aux bottom sheets pour une navigation plus fluide et une meilleure gestion du clavier',
      ],
      arTN: [
        'حسّنّا: رجّعنا الفورميلارات متع الحسابات، الميزانية، الاشتراكات، والمعاملات في صفحات كاملة',
        'حذفنا: الـ bottom sheets باش تولي الملاحة أسهل و الكلافيي يخدم خير',
      ],
    },
  },
  {
    version: '1.39.27',
    date: '2026-04-27',
    changes: {
      en: [
        'Improved: Improved RTL support for Arabic screens',
        'Improved: Moved Changelog, Privacy & Terms into About section',
        'Improved: Notification settings now have a dedicated page',
        'Fixed: Snackbar visibility in light mode',
        'Improved: Rewrote Help FAQ in natural Tunisian Arabic',
        'Improved: Cleaned up unused translation keys',
      ],
      fr: [
        'Amélioré : Du support RTL pour les écrans arabes',
        'Amélioré : Changelog, Confidentialité et Conditions déplacés dans À propos',
        'Amélioré : Les notifications ont maintenant une page dédiée',
        'Amélioré : Correction de la visibilité du Snackbar en mode clair',
        'Amélioré : Réécriture de la FAQ en arabe tunisien naturel',
        'Supprimé : Nettoyage des clés de traduction inutilisées',
      ],
      arTN: [
        'حسّنّا: تحسين RTL للشاشات بالعربي',
        'حسّنّا: الـ Changelog والخصوصية والشروط ولّاو في صفحة "حول"',
        'حسّنّا: الإشعارات ولّات في صفحة خاصة',
        'حسّنّا: تصليح الـ Snackbar في الوضع الفاتح',
        'حسّنّا: إعادة كتابة الأسئلة الشائعة بالدارجة التونسية',
        'حسّنّا: تنظيف مفاتيح الترجمة اللي ما عادش تتخدم',
      ],
    },
  },
  {
    version: '1.39.26',

    date: '2026-04-25',
    changes: {
      en: [
        'Fixed: Exchange rates now load instantly from cache on dashboard startup',
        'Fixed: Subscription currency now correctly derives from selected account',
        'Added: Dedicated Exchange Rates screen with all 16 supported currencies',
        'Added: ConfirmSheet replaces Alert.alert for design-consistent confirmations',
        'Improved: Transfer cards now show "From → To" account info',
        'Improved: Stale rate badge is now tappable to trigger a manual refresh',
        'Improved: Dashboard refreshes accounts & transactions on every focus',
        'Improved: Icon containers in account creation now vertically centered',
        'Improved: Welcome Step 2 icon is now minimalist (no background circle)',
      ],
      fr: [
        'Corrigé : Les taux de change se chargent instantanément depuis le cache au démarrage du tableau de bord',
        'Corrigé : La devise des abonnements est maintenant correctement dérivée du compte sélectionné',
        'Ajouté : Écran dédié aux taux de change avec les 16 devises supportées',
        'Ajouté : ConfirmSheet remplace Alert.alert pour des confirmations cohérentes avec le design',
        'Amélioré : Les cartes de virement affichent maintenant "De → Vers" le compte',
        'Amélioré : La pastille de taux périmé est maintenant cliquable pour forcer une actualisation',
        'Amélioré : Le tableau de bord rafraîchit comptes et transactions à chaque focus',
        'Amélioré : Les conteneurs d\'icônes dans la création de compte sont maintenant centrés verticalement',
        'Amélioré : L\'icône de l\'étape 2 de bienvenue est maintenant minimaliste (sans cercle d\'arrière-plan)',
      ],
      arTN: [
        'صلّحنا: أسعار الصرف تتحمّل فوري من الكاش وقت تفتح الداشبورد',
        'صلّحنا: عملة الاشتراك ولّت تتحدد صح من الحساب المختار',
        'زدنا: شاشة مخصصة لأسعار الصرف تعرض الـ16 عملة المدعومة',
        'زدنا: ConfirmSheet يبدّل Alert.alert باش التأكيدات تبان منسجمة مع الديزاين',
        'حسّنّا: بطاقات التحويل ولّت تعرض "من → إلى" الحساب',
        'حسّنّا: تنبيه الأسعار القديمة ولّى يُضغط باش تجدّد الأسعار يدوياً',
        'حسّنّا: الداشبورد يعيد تحميل الحسابات والمعاملات كل ما تدخل',
        'حسّنّا: حاويات الأيقونات في إنشاء الحساب ولّت مرتكزة رأسياً',
        'حسّنّا: أيقونة الخطوة 2 من الترحيب ولّت بسيطة (بلا دائرة خلفية)',
      ],
    },
  },
  {
    version: '1.39.25',
    date: '2026-04-23',
    changes: {
      en: [
        'Fixed: App no longer prompts for PIN twice when returning from the background',
        'Fixed: Onboarding flow no longer restarts after completing currency setup',
        'Improved: AppState security gate resets correctly when app comes back to foreground',
        'Improved: Arabic text layout now uses correct right-to-left formatting on Welcome screen',
      ],
      fr: [
        'Corrigé : L\'application ne demande plus le PIN deux fois au retour en premier plan',
        'Corrigé : Le flux d\'accueil ne redémarre plus après la configuration de la devise',
        'Amélioré : Le verrou de sécurité AppState se réinitialise correctement au retour au premier plan',
        'Amélioré : Le texte arabe utilise maintenant le bon alignement de droite à gauche sur l\'accueil',
      ],
      arTN: [
        'صلّحنا: التطبيق ما عادش يطلب PIN مرتين لما ترجع للواجهة',
        'صلّحنا: الإعداد الأولي ما عادش يبدأ من أول بعد اختيار العملة',
        'حسّنّا: نظام قفل الأمان يرجع لحالته الصحيحة لما ترجع للتطبيق',
        'حسّنّا: النص العربي في شاشة الترحيب ولّى يبان بالاتجاه الصحيح من اليمين لليسار',
      ],
    },
  },
  {
    version: '1.39.24',
    date: '2026-04-22',
    changes: {
      en: [
        'Improved: All changelog entries now translated to French and Tunisian Arabic (55 versions)',
        'Fixed: Backup restore now preserves currency on budgets and subscriptions',
      ],
      fr: [
        'Ajouté : Tout l\'historique des changements traduit en français et arabe tunisien (55 versions)',
        'Corrigé : La restauration de sauvegarde préserve maintenant la devise des budgets et abonnements',
      ],
      arTN: [
        'حسّنّا: كل سجل التغييرات ولّى مترجم بالفرنسية والعربية التونسية (55 إصدار)',
        'صلّحنا: استرجاع النسخة الاحتياطية يحافظ الآن على عملة الميزانيات والاشتراكات',
      ],
    },
  },
  {
    version: '1.39.23',
    date: '2026-04-22',
    changes: {
      en: [
        'Fixed: Platform.OS dead branch in notification time picker',
        'Fixed: Dead imports removed from welcome screen',
        'Fixed: PIN setup screen now uses design tokens consistently',
        'Improved: Changelog now displays in your app language (EN/FR/arTN)',
        'Improved: V1.39.21 and v1.39.22 changelogs translated to French and Tunisian Arabic',
        'Fixed: SubscriptionUpdate type now includes account_id and currency fields',
      ],
      fr: [
        'Corrigé : Branche morte Platform.OS dans le sélecteur d\'heure de notification',
        'Corrigé : Imports inutilisés supprimés de l\'écran d\'accueil',
        'Corrigé : L\'écran de configuration du PIN utilise maintenant les tokens du design',
        'Amélioré : Le changelog s\'affiche maintenant dans la langue de l\'app (EN/FR/arTN)',
        'Amélioré : Les changelogs v1.39.21 et v1.39.22 traduits en français et arabe tunisien',
        'Corrigé : Le type SubscriptionUpdate inclut maintenant account_id et currency',
      ],
      arTN: [
        'صلّحنا: كود ميت في منتقي وقت الإشعارات',
        'صلّحنا: استيرادات غير مستخدمة حُذفت من شاشة الترحيب',
        'صلّحنا: شاشة إعداد الرمز السري تستخدم الآن توكنات التصميم بشكل متسق',
        'حسّنّا: سجل التغييرات يظهر الآن بلغة التطبيق (EN/FR/arTN)',
        'حسّنّا: تُرجم سجل التغييرات للإصدارين 1.39.21 و1.39.22 إلى الفرنسية والعربية التونسية',
        'صلّحنا: نوع SubscriptionUpdate يتضمن الآن account_id و currency',
      ],
    },
  },
  {
    version: '1.39.22',
    date: '2026-04-21',
    changes: {
      en: [
        'Fixed: Onboarding blocked on currency selection screen , user identity now created automatically',
        'Fixed: Welcome step 2 redesigned with Privacy & Offline USP cards',
        'Fixed: Welcome step 3 restored',
      ],
      fr: [
        'Corrigé : Blocage lors de la sélection de la devise à l\'accueil , l\'identité utilisateur est maintenant créée automatiquement',
        'Corrigé : Étape 2 de l\'accueil redessinée avec les cartes Confidentialité & Hors-ligne',
        'Corrigé : Étape 3 de l\'accueil restaurée',
      ],
      arTN: [
        'صلّحنا: كانت الأبليكاشن تعلق في صفحة اختيار العملة , صلّحنا الأمر، راه يخلق حسابك وحده',
        'صلّحنا: صفحة الترحيب 2 تغيّرت , صلّحنا الأمر، راه يعلم بالخصوصية والعمل بدون إنترنت',
        'صلّحنا: الصفحة 3 من الترحيب رجعت كما كانت',
      ],
    },
  },
  {
    version: '1.39.21',
    date: '2026-04-21',
    changes: {
      en: [
        'Fixed: Welcome screen step 2 icons invisible',
        'Fixed: Settings language display always showing English',
        'Fixed: Transfer cards missing from/to account names',
        'Fixed: Account creation silent failure on empty name',
      ],
      fr: [
        'Corrigé : Icônes invisibles à l\'étape 2 de l\'écran d\'accueil',
        'Corrigé : Les paramètres affichaient toujours "English" comme langue',
        'Corrigé : Les cartes de virement n\'affichaient pas les comptes source/destination',
        'Corrigé : La création de compte échouait silencieusement si le nom était vide',
      ],
      arTN: [
        'صلّحنا: الأيقونات في الصفحة 2 من الترحيب ما كانتش تبان',
        'صلّحنا: الإعدادات كانت تعرض دائمًا "English" كلغة',
        'صلّحنا: بطاقات التحويل ما كانتش تعرض اسم الحساب المصدر والوجهة',
        'صلّحنا: إنشاء الحساب كان يفشل بصمت لما تبقى خانة الاسم فارغة',
      ],
    },
  },
  {
    version: '1.39.20',
    date: '2026-04-20',
    changes: {
      en: [
        'Fixed: Budget currency conversion for cross-currency tracking',
        'Fixed: PIN no longer forced during onboarding',
        'Fixed: Factory reset confirmation text',
        'Added: Account creation validation alerts',
        'Fixed: Settings language display',
        'Fixed: Banque icon in account creation',
        'Improved: Toast notifications with solid design',
        'Added: From/to account info on transfer cards',
        'Improved: Welcome screens content and icons',
        'Added: Dedicated notifications settings page',
        'Improved: Help section with 8 Q&A items',
      ],
      fr: [
        'Corrigé : Conversion de devise des budgets pour le suivi multi-devises',
        'Corrigé : Le PIN n\'est plus imposé pendant l\'onboarding',
        'Corrigé : Texte de confirmation de réinitialisation d\'usine',
        'Ajouté : Alertes de validation lors de la création de compte',
        'Corrigé : Affichage de la langue dans les paramètres',
        'Corrigé : Icône Banque dans la création de compte',
        'Amélioré : Notifications toast avec un design solide',
        'Ajouté : Informations du compte source/destination sur les cartes de virement',
        'Amélioré : Contenu et icônes des écrans de bienvenue',
        'Ajouté : Page de paramètres de notifications dédiée',
        'Amélioré : Section aide avec 8 questions/réponses',
      ],
      arTN: [
        'صلّحنا: تحويل العملة في الميزانيات للتتبع متعدد العملات',
        'صلّحنا: ما عادش يجبرك تدخل PIN وقت الإعداد الأولي',
        'صلّحنا: نص تأكيد إعادة الضبط الكامل',
        'زدنا: تنبيهات التحقق عند إنشاء حساب',
        'صلّحنا: عرض اللغة في الإعدادات',
        'صلّحنا: أيقونة البنك في إنشاء الحساب',
        'حسّنّا: إشعارات التوست بتصميم واضح وثابت',
        'زدنا: معلومات الحساب المُرسِل والمُستقبِل على بطاقات التحويل',
        'حسّنّا: محتوى وأيقونات شاشات الترحيب',
        'زدنا: صفحة إعدادات إشعارات مخصصة',
        'حسّنّا: قسم المساعدة بـ 8 أسئلة وأجوبة',
      ],
    },
  },
  {
    version: '1.39.19',
    date: '2026-04-19',
    changes: {
      en: [
        'Fixed: Cross-currency transfers now convert correctly',
        'Improved: Hero Balance Card redesigned',
        'Added: Factory reset confirmation dialog',
        'Improved: Onboarding flow reordered',
        'Improved: Currency picker with grid layout',
        'Improved: Create First Account screen',
        'Fixed: Remaining code smells and hardcoded values',
      ],
      fr: [
        'Corrigé : Les virements multi-devises se convertissent maintenant correctement',
        'Amélioré : Carte de solde principale redessinée',
        'Ajouté : Boîte de dialogue de confirmation de réinitialisation d\'usine',
        'Amélioré : Flux d\'onboarding réorganisé',
        'Amélioré : Sélecteur de devise avec disposition en grille',
        'Amélioré : Écran de création du premier compte',
        'Corrigé : Dernières impuretés de code et valeurs codées en dur',
      ],
      arTN: [
        'صلّحنا: التحويلات بين العملات المختلفة تتحوّل صح الآن',
        'حسّنّا: بطاقة الرصيد الرئيسية تصميمها تجدّد',
        'زدنا: نافذة تأكيد إعادة الضبط الكامل',
        'حسّنّا: ترتيب خطوات الإعداد الأولي تحسّن',
        'حسّنّا: منتقي العملة بتخطيط شبكي',
        'حسّنّا: شاشة إنشاء أول حساب',
        'صلّحنا: آخر بقايا الأكواد المشفّرة والقيم الثابتة',
      ],
    },
  },
  {
    version: '1.39.18',
    date: '2026-04-20',
    changes: {
      en: [
        'Improved: Updated background contrast (navyDeep) for better readability',
        'UI: Fully tokenized remaining UI components (TourTooltip, SpeedDialFAB, overlays)',
        'Removed: All hardcoded hex colors from main tab screens',
        'Fixed: French translations and layout in Categories screen',
        'Fixed: Donut chart now correctly applies user default currency',
      ],
      fr: [
        'Amélioré : Contraste de l\'arrière-plan (navyDeep) pour une meilleure lisibilité',
        'Amélioré : Tous les composants UI restants utilisent désormais les tokens (TourTooltip, SpeedDialFAB, overlays)',
        'Corrigé : Toutes les couleurs hex codées en dur supprimées des écrans principaux',
        'Corrigé : Traductions françaises et mise en page de l\'écran Catégories',
        'Corrigé : Le graphique en anneau applique maintenant correctement la devise par défaut de l\'utilisateur',
      ],
      arTN: [
        'حسّنّا: تباين الخلفية (navyDeep) باش تقرا أحسن',
        'حسّنّا: كل مكونات الواجهة الباقية ولّت تستعمل التوكنز (TourTooltip, SpeedDialFAB, overlays)',
        'صلّحنا: حذفنا كل الألوان المشفّرة من الشاشات الرئيسية',
        'صلّحنا: الترجمات الفرنسية وتخطيط شاشة الفئات',
        'صلّحنا: الرسم البياني الحلقي يطبّق الآن العملة الافتراضية للمستخدم صح',
      ],
    },
  },
  {
    version: '1.39.17',
    date: '2026-04-19',
    changes: {
      en: [
        'Improved: Started centralization of the design system into explicit tokens',
      ],
      fr: [
        'Amélioré : Début de la centralisation du système de design en tokens explicites',
      ],
      arTN: [
        'حسّنّا: بدينا نجمّعوا نظام التصميم في توكنز واضحة',
      ],
    },
  },
  {
    version: '1.39.16',
    date: '2026-04-19',
    changes: {
      en: [
        'Fixed: Removed all remaining hardcoded TND currency fallbacks',
        'Fixed: Amount inputs now display currency code during editing',
        'Fixed: Dark mode colors corrected to match design charter',
        'Fixed: Card border radius and shadow corrected to 12px / gold',
      ],
      fr: [
        'Corrigé : Toutes les devises TND codées en dur ont été supprimées',
        'Corrigé : Les champs de montant affichent maintenant le code devise lors de la saisie',
        'Corrigé : Les couleurs du mode sombre correspondent maintenant à la charte graphique',
        'Corrigé : Le rayon de bordure et l\'ombre des cartes corrigés à 12px / or',
      ],
      arTN: [
        'صلّحنا: حذفنا كل الـ TND المشفّرة اللي كانت تبقى كـ fallback',
        'صلّحنا: خانات المبلغ تعرض الآن رمز العملة وقت الكتابة',
        'صلّحنا: ألوان الوضع الداكن ولّت تطابق الشارت التصميمي',
        'صلّحنا: حواف وظل البطاقات صحّحناهم لـ 12px / ذهبي',
      ],
    },
  },
  {
    version: '1.39.15',
    date: '2026-04-19',
    changes: {
      en: [
        'Fixed: Editing budgets/subscriptions in non-default currency no longer corrupts amounts',
        'Fixed: Subscription account changes now save correctly',
        'Fixed: All currency defaults now respect your chosen currency (USD safe fallback)',
        'Fixed: Exchange rates retry 3x on failure with exponential backoff',
        'Fixed: Stale rates warning shown when offline cache is >24h old',
        'Fixed: Transaction time always visible , moved to right column',
        'Improved: Budget calculations are now significantly faster when tracking many categories at once',
        'Improved: Database query performance for smoother scrolling in long transaction lists',
        'UI: Decimal keyboard on amount fields, dark-themed feedback messages, gold account picker',
      ],
      fr: [
        'Corrigé : Modifier des budgets/abonnements dans une devise non-défaut ne corrompt plus les montants',
        'Corrigé : Les modifications de compte d\'abonnement sont maintenant sauvegardées correctement',
        'Corrigé : Toutes les devises par défaut respectent maintenant votre devise choisie (USD en fallback sécurisé)',
        'Corrigé : Les taux de change réessaient 3 fois en cas d\'échec avec un délai exponentiel',
        'Corrigé : Avertissement affiché quand le cache hors-ligne des taux a plus de 24h',
        'Corrigé : L\'heure de transaction est toujours visible , déplacée dans la colonne de droite',
        'Amélioré : Les calculs de budget sont maintenant nettement plus rapides lors du suivi de nombreuses catégories',
        'Amélioré : Performance des requêtes de base de données pour un défilement plus fluide dans les longues listes',
        'Interface : UI : Clavier décimal sur les champs de montant, messages de retour thème sombre, sélecteur de compte doré',
      ],
      arTN: [
        'صلّحنا: تعديل الميزانيات/الاشتراكات بعملة غير افتراضية ما عادش يخرّب المبالغ',
        'صلّحنا: تغييرات حساب الاشتراك تتحفظ صح الآن',
        'صلّحنا: كل العملات الافتراضية تحترم الآن عملتك المختارة (USD كـ fallback آمن)',
        'صلّحنا: أسعار الصرف تعيد المحاولة 3 مرات عند الفشل مع تأخير تدريجي',
        'صلّحنا: تحذير يظهر لما الكاش offline للأسعار عمره أكثر من 24 ساعة',
        'صلّحنا: وقت المعاملة يبان دايمًا , نقلناه للعمود الأيمن',
        'حسّنّا: حسابات الميزانية ولّت أسرع بكثير لما تتابع تصنيفات كثيرة في نفس الوقت',
        'حسّنّا: أداء استعلامات قاعدة البيانات للتمرير أسلس في القوائم الطويلة',
        'واجهة: لوحة أرقام عشرية على خانات المبلغ، رسائل تغذية راجعة داكنة، منتقي حساب ذهبي',
      ],
    },
  },
  {
    version: '1.39.14',
    date: '2026-04-18',
    changes: {
      en: [
        'Fixed: 10x inflation bug when accounts use different currencies',
        'Fixed: Budget and subscription amounts now convert correctly to your display currency',
        'Improved: System category names are now translated in all list views',
        'Added: Haptic Feedback toggle in Settings → Preferences',
        'Improved: Expense donut chart now groups by translated category name',
      ],
      fr: [
        'Corrigé : Bug d\'inflation x10 quand les comptes utilisent des devises différentes',
        'Corrigé : Les montants des budgets et abonnements se convertissent maintenant correctement dans votre devise d\'affichage',
        'Corrigé : Les noms de catégories système sont maintenant traduits dans toutes les vues de liste',
        'Ajouté : Bouton de retour haptique dans Paramètres → Préférences',
        'Corrigé : Le graphique en anneau des dépenses regroupe maintenant par nom de catégorie traduit',
      ],
      arTN: [
        'صلّحنا: بوق تضخيم x10 لما الحسابات تستعمل عملات مختلفة',
        'صلّحنا: مبالغ الميزانيات والاشتراكات تتحوّل صح لعملة العرض ديالك',
        'صلّحنا: أسماء الفئات النظامية ولّت مترجمة في كل القوائم',
        'زدنا: زر تفعيل الاهتزاز في الإعدادات ← التفضيلات',
        'صلّحنا: الرسم الحلقي للمصاريف يجمّع الآن حسب اسم الفئة المترجم',
      ],
    },
  },
  {
    version: '1.39.13',
    date: '2026-04-18',
    changes: {
      en: [
        'Improved: Tunisian Arabic rewritten in authentic Darija , more natural and casual',
        'Improved: Currency names now display in your chosen language',
        'Improved: Currency picker shows all 16 supported currencies',
        'Improved: Currency search now works in your current language',
      ],
      fr: [
        'Amélioré : L\'arabe tunisien réécrit en Darija authentique , plus naturel et décontracté',
        'Amélioré : Les noms de devises s\'affichent maintenant dans votre langue choisie',
        'Amélioré : Le sélecteur de devise affiche les 16 devises supportées',
        'Corrigé : La recherche de devise fonctionne maintenant dans votre langue actuelle',
      ],
      arTN: [
        'حسّنّا: العربية التونسية تبدّلت بدارجة حقيقية , أطبع وأقرب',
        'حسّنّا: أسماء العملات تبان الآن بلغتك المختارة',
        'حسّنّا: منتقي العملة يعرض الـ 16 عملة المدعومة',
        'حسّنّا: البحث عن العملة يخدم الآن بلغتك الحالية',
      ],
    },
  },
  {
    version: '1.39.12',
    date: '2026-04-17',
    changes: {
      en: [
        'Improved: Hard reset no longer freezes the app on a black screen',
        'Fixed: Amount fields now work correctly with Arabic keyboards',
        'Improved: Improved data migration accuracy for Tunisian Dinar',
        'Improved: Better app stability during fast navigation',
        'Improved: Production logging cleanup',
      ],
      fr: [
        'Corrigé : La réinitialisation complète ne fige plus l\'application sur un écran noir',
        'Corrigé : Les champs de montant fonctionnent maintenant correctement avec les claviers arabes',
        'Amélioré : Précision de la migration des données pour le Dinar Tunisien',
        'Amélioré : Meilleure stabilité de l\'application lors d\'une navigation rapide',
        'Amélioré : Nettoyage des logs de production',
      ],
      arTN: [
        'صلّحنا: إعادة الضبط الكامل ما عادش تجمّد التطبيق على شاشة سوداء',
        'صلّحنا: خانات المبلغ تخدم صح مع لوحات المفاتيح العربية',
        'حسّنّا: دقة ترحيل البيانات للدينار التونسي',
        'حسّنّا: استقرار التطبيق أحسن وقت التنقل السريع',
        'حسّنّا: تنظيف سجلات الإنتاج',
      ],
    },
  },
  {
    version: '1.39.11',
    date: '2026-04-17',
    changes: {
      en: [
        'Improved: App no longer crashes when opened quickly or multiple times in a row',
        'Improved: PIN lock screen no longer appears twice back-to-back',
        'Fixed: PIN verification now works correctly right after first-time setup',
        'Improved: Changing your currency now updates all screens instantly',
        'Fixed: Number input works correctly when your device language is set to Arabic',
      ],
      fr: [
        'Corrigé : L\'application ne plante plus quand elle est ouverte rapidement ou plusieurs fois de suite',
        'Corrigé : L\'écran de verrouillage PIN n\'apparaît plus deux fois de suite',
        'Corrigé : La vérification PIN fonctionne maintenant correctement juste après la configuration initiale',
        'Corrigé : Changer votre devise met maintenant à jour tous les écrans instantanément',
        'Corrigé : La saisie de nombres fonctionne correctement quand la langue de l\'appareil est l\'arabe',
      ],
      arTN: [
        'صلّحنا: التطبيق ما عادش يكرش لما تفتحه بسرعة أو أكثر من مرة',
        'صلّحنا: شاشة قفل الـ PIN ما عادش تبان مرتين متتاليتين',
        'صلّحنا: التحقق من الـ PIN يخدم صح مباشرة بعد الإعداد الأول',
        'صلّحنا: تغيير عملتك يحدّث كل الشاشات فوري',
        'صلّحنا: إدخال الأرقام يخدم صح لما لغة جهازك عربية',
      ],
    },
  },
  {
    version: '1.39.3',
    date: '2026-04-13',
    changes: {
      en: [
        'Improved: Sections in the More tab are now in a more logical order',
        'Improved: Tap the notifications shortcut to jump straight to notification settings',
        'Fixed: Numbers now display correctly when your device is set to Arabic',
        'Fixed: Icons on gold-colored backgrounds now show the correct colors',
      ],
      fr: [
        'Amélioré : Les sections de l\'onglet Plus sont maintenant dans un ordre plus logique',
        'Ajouté : Appuyez sur le raccourci notifications pour accéder directement aux paramètres de notifications',
        'Corrigé : Les nombres s\'affichent correctement quand votre appareil est en arabe',
        'Corrigé : Les icônes sur fond doré affichent maintenant les bonnes couleurs',
      ],
      arTN: [
        'حسّنّا: أقسام تاب "المزيد" ولّت بترتيب أمنطق',
        'زدنا: اضغط على اختصار الإشعارات باش تروح مباشرة لإعداداتها',
        'صلّحنا: الأرقام تبان صح لما جهازك مضبوط على العربية',
        'صلّحنا: الأيقونات على الخلفيات الذهبية تعرض الآن الألوان الصحيحة',
      ],
    },
  },
  {
    version: '1.39.2',
    date: '2026-04-13',
    changes: {
      en: [
        'Improved: Tap a budget category to jump directly to its transactions',
        'Improved: Recurring budgets now show a warning before you make changes',
        'Improved: Currency field now shows a helpful placeholder when empty',
        'Fixed: Subscription entries now display the correct account name',
        'Improved: Summary numbers on the home screen resize automatically so nothing gets cut off',
      ],
      fr: [
        'Ajouté : Appuyez sur une catégorie de budget pour accéder directement à ses transactions',
        'Amélioré : Les budgets récurrents affichent maintenant un avertissement avant toute modification',
        'Amélioré : Le champ devise affiche maintenant un texte indicatif quand il est vide',
        'Corrigé : Les abonnements affichent maintenant le bon nom de compte',
        'Amélioré : Les chiffres du résumé sur l\'écran d\'accueil se redimensionnent automatiquement pour ne rien couper',
      ],
      arTN: [
        'زدنا: اضغط على فئة الميزانية باش تروح مباشرة لمعاملاتها',
        'حسّنّا: الميزانيات المتكررة تعرض الآن تحذيرًا قبل ما تعدّل عليها',
        'حسّنّا: خانة العملة تعرض الآن نص توضيحي لما تكون فارغة',
        'صلّحنا: الاشتراكات تعرض الآن اسم الحساب الصحيح',
        'حسّنّا: أرقام الملخص في الشاشة الرئيسية تتكيّف تلقائيًا باش ما تتقطعش',
      ],
    },
  },
  {
    version: '1.39.1',
    date: '2026-04-13',
    changes: {
      en: [
        'Improved: Search bar now collapses neatly when you\'re not using it',
        'Improved: Navigate between months more easily with the updated month selector',
        'Added: Create a new category directly from the transaction form',
        'Improved: Transaction descriptions now appear as a subtitle for easier reading',
      ],
      fr: [
        'Amélioré : La barre de recherche se rétracte maintenant proprement quand vous ne l\'utilisez pas',
        'Amélioré : Naviguez entre les mois plus facilement avec le sélecteur de mois mis à jour',
        'Ajouté : Créez une nouvelle catégorie directement depuis le formulaire de transaction',
        'Amélioré : Les descriptions de transaction apparaissent maintenant comme sous-titre pour une lecture plus facile',
      ],
      arTN: [
        'حسّنّا: شريط البحث يتطوى بنظافة لما ما تستعملوش',
        'حسّنّا: التنقل بين الأشهر أسهل مع منتقي الشهر المحدّث',
        'زدنا: تنجم تنشئ فئة جديدة مباشرة من نموذج المعاملة',
        'حسّنّا: وصف المعاملات يبان الآن كعنوان فرعي للقراءة أسهل',
      ],
    },
  },
  {
    version: '1.39.0',
    date: '2026-04-14',
    changes: {
      en: [
        'Improved: Forgetting your PIN now clearly explains that recovery requires a full app reset , no surprises',
        'Improved: A Factory Reset option is available if you ever need a completely fresh start',
        'Added: The quick-add button background is now a deep navy for better contrast',
        'Added: Quick-add buttons are larger and easier to tap',
      ],
      fr: [
        'Amélioré : Oublier votre PIN explique maintenant clairement que la récupération nécessite une réinitialisation complète , sans surprises',
        'Ajouté : Une option de réinitialisation d\'usine est disponible si vous avez besoin de repartir de zéro',
        'Amélioré : L\'arrière-plan du bouton d\'ajout rapide est maintenant bleu marine profond pour un meilleur contraste',
        'Amélioré : Les boutons d\'ajout rapide sont plus grands et plus faciles à appuyer',
      ],
      arTN: [
        'حسّنّا: نسيان الـ PIN يشرح الآن بوضوح أن الاسترجاع يحتاج إعادة ضبط كاملة , بلا مفاجآت',
        'زدنا: خيار إعادة الضبط الكامل متاح لما تحتاج بداية جديدة من الصفر',
        'حسّنّا: خلفية زر الإضافة السريعة ولّت كحلاء عميقة للتباين أحسن',
        'حسّنّا: أزرار الإضافة السريعة أكبر وأسهل للضغط',
      ],
    },
  },
  {
    version: '1.38.1',
    date: '2026-04-12',
    changes: {
      en: [
        'Added: Meal Voucher as an account type',
        'Added: New currencies supported: Moroccan Dirham (MAD), Egyptian Pound (EGP), Libyan Dinar (LYD), and Chinese Yuan (CNY)',
        'Fixed: Deleting a transfer now correctly reverses the balance on both accounts',
        'Improved: Guide tour tooltips display properly again',
      ],
      fr: [
        'Ajouté : Ticket Restaurant comme type de compte',
        'Ajouté : Nouvelles devises supportées : Dirham marocain (MAD), Livre égyptienne (EGP), Dinar libyen (LYD) et Yuan chinois (CNY)',
        'Corrigé : Supprimer un virement inverse maintenant correctement le solde des deux comptes',
        'Corrigé : Les infobulles du guide s\'affichent à nouveau correctement',
      ],
      arTN: [
        'زدنا: قسيمة الوجبات كنوع حساب جديد',
        'زدنا: عملات جديدة مدعومة: درهم مغربي (MAD)، جنيه مصري (EGP)، دينار ليبي (LYD)، يوان صيني (CNY)',
        'صلّحنا: حذف التحويل يعكس الآن الرصيد صح على الحسابين',
        'صلّحنا: تلميحات جولة الدليل تبان صح مرة أخرى',
      ],
    },
  },
  {
    version: '1.38.0',
    date: '2026-04-12',
    changes: {
      en: [
        'Improved: Subscription billing is now handled automatically inside the app',
        'Improved: You can no longer accidentally create two budgets for the same category',
        'Improved: The count of over-budget categories is now accurate',
        'Improved: Budget cards no longer get cut off at the edges',
        'Fixed: Income and expense totals now correctly cover the full month',
      ],
      fr: [
        'Amélioré : La facturation des abonnements est maintenant gérée automatiquement dans l\'application',
        'Corrigé : Vous ne pouvez plus créer accidentellement deux budgets pour la même catégorie',
        'Corrigé : Le nombre de catégories dépassant le budget est maintenant précis',
        'Corrigé : Les cartes de budget ne sont plus coupées sur les bords',
        'Corrigé : Les totaux de revenus et dépenses couvrent maintenant correctement le mois entier',
      ],
      arTN: [
        'حسّنّا: فواتير الاشتراكات تتعامل الآن تلقائيًا داخل التطبيق',
        'صلّحنا: ما عادش تنجم تنشئ ميزانيتين لنفس الفئة بالغلط',
        'صلّحنا: عدد الفئات المتجاوزة للميزانية ولّى دقيق',
        'صلّحنا: بطاقات الميزانية ما عادش تتقطع من الحواف',
        'صلّحنا: إجماليات الدخل والمصاريف تغطي الآن الشهر كامل صح',
      ],
    },
  },
  {
    version: '1.37.1',
    date: '2026-04-12',
    changes: {
      en: [
        'Fixed: Tunisian Dinar (TND) amounts were being converted incorrectly , this is now resolved',
        'Fixed: Subscription billing dates and amounts now calculate correctly',
        'Fixed: Income totals now add up correctly',
        'Improved: Error messages now appear in your chosen language',
      ],
      fr: [
        'Corrigé : Les montants en Dinar Tunisien (TND) étaient convertis incorrectement , c\'est maintenant résolu',
        'Corrigé : Les dates et montants de facturation des abonnements se calculent maintenant correctement',
        'Corrigé : Les totaux de revenus s\'additionnent maintenant correctement',
        'Corrigé : Les messages d\'erreur apparaissent maintenant dans votre langue choisie',
      ],
      arTN: [
        'صلّحنا: مبالغ الدينار التونسي (TND) كانت تتحوّل غلط , الأمر حُلّ الآن',
        'صلّحنا: تواريخ ومبالغ فواتير الاشتراكات تحسب صح الآن',
        'صلّحنا: إجماليات الدخل تجمع صح الآن',
        'صلّحنا: رسائل الخطأ تبان الآن بلغتك المختارة',
      ],
    },
  },
  {
    version: '1.37.0',
    date: '2026-03-30',
    changes: {
      en: [
        'Improved: Full 8-step guided tour to help you get started',
        'Improved: Currency setup screen walks you through picking your currency',
        'Improved: Month names now appear in your chosen language throughout the app',
        'Fixed: Guide tour tooltip highlights the quick-add button correctly',
        'Improved: Account forms no longer get hidden behind the keyboard',
        'Improved: Tour is fully translated into all supported languages',
      ],
      fr: [
        'Ajouté : Visite guidée complète en 8 étapes pour vous aider à démarrer',
        'Ajouté : Écran de configuration de devise qui vous guide dans le choix de votre devise',
        'Amélioré : Les noms de mois apparaissent maintenant dans votre langue choisie dans toute l\'application',
        'Corrigé : L\'infobulle de la visite guidée met en évidence le bouton d\'ajout rapide correctement',
        'Corrigé : Les formulaires de compte ne se cachent plus derrière le clavier',
        'Amélioré : La visite est entièrement traduite dans toutes les langues supportées',
      ],
      arTN: [
        'زدنا: جولة إرشادية كاملة من 8 خطوات تعاونك تبدا',
        'زدنا: شاشة إعداد العملة ترشدك لاختيار عملتك',
        'حسّنّا: أسماء الأشهر تبان الآن بلغتك المختارة في كل التطبيق',
        'صلّحنا: تلميح جولة الدليل يبرز زر الإضافة السريعة صح',
        'صلّحنا: نماذج الحساب ما عادش تختبي وراء لوحة المفاتيح',
        'حسّنّا: الجولة مترجمة كاملة بكل اللغات المدعومة',
      ],
    },
  },
  {
    version: '1.36.0',
    date: '2026-03-30',
    changes: {
      en: [
        'Improved: The keyboard no longer covers input fields in any form across the app',
      ],
      fr: [
        'Corrigé : Le clavier ne couvre plus les champs de saisie dans aucun formulaire de l\'application',
      ],
      arTN: [
        'صلّحنا: لوحة المفاتيح ما عادش تغطي خانات الإدخال في أي نموذج في التطبيق',
      ],
    },
  },
  {
    version: '1.35.0',
    date: '2026-03-30',
    changes: {
      en: [
        'Fixed: The guide tour now correctly highlights the quick-add button on all screen sizes',
      ],
      fr: [
        'Corrigé : La visite guidée met maintenant correctement en évidence le bouton d\'ajout rapide sur toutes les tailles d\'écran',
      ],
      arTN: [
        'صلّحنا: جولة الدليل تبرز الآن زر الإضافة السريعة صح على كل أحجام الشاشات',
      ],
    },
  },
  {
    version: '1.34.0',
    date: '2026-03-30',
    changes: {
      en: [
        'Added: On Android, the keyboard no longer covers the form when adding or editing a transaction',
      ],
      fr: [
        'Corrigé : Sur Android, le clavier ne couvre plus le formulaire lors de l\'ajout ou de la modification d\'une transaction',
      ],
      arTN: [
        'صلّحنا: على Android، لوحة المفاتيح ما عادش تغطي النموذج وقت إضافة أو تعديل معاملة',
      ],
    },
  },
  {
    version: '1.33.0',
    date: '2026-03-29',
    changes: {
      en: [
        'Improved: Your chosen statistics time period is now remembered between sessions',
        'Fixed: Currency amounts now display with the correct number of decimal places',
      ],
      fr: [
        'Amélioré : La période statistique choisie est maintenant mémorisée entre les sessions',
        'Corrigé : Les montants en devise s\'affichent maintenant avec le bon nombre de décimales',
      ],
      arTN: [
        'حسّنّا: الفترة الزمنية للإحصائيات اللي تختارها تتذكّر الآن بين الجلسات',
        'صلّحنا: مبالغ العملات تبان الآن بالعدد الصحيح من الخانات العشرية',
      ],
    },
  },
  {
    version: '1.32.0',
    date: '2026-03-28',
    changes: {
      en: [
        'Added: A "Forgot PIN?" link on the lock screen',
        'Improved: Changing your app language now shows a confirmation notification',
      ],
      fr: [
        'Ajouté : Un lien "PIN oublié ?" sur l\'écran de verrouillage',
        'Amélioré : Changer la langue de l\'application affiche maintenant une notification de confirmation',
      ],
      arTN: [
        'زدنا: رابط "نسيت الـ PIN؟" في شاشة القفل',
        'حسّنّا: تغيير لغة التطبيق يعرض الآن إشعار تأكيد',
      ],
    },
  },
  {
    version: '1.31.0',
    date: '2026-03-27',
    changes: {
      en: [
        'UI: Every screen now shows a friendly illustration when there\'s nothing to display yet',
      ],
      fr: [
        'Amélioré : Chaque écran affiche maintenant une illustration sympa quand il n\'y a encore rien à afficher',
      ],
      arTN: [
        'حسّنّا: كل شاشة تعرض الآن رسمة ودية لما ما فيش شي يتعرض بعد',
      ],
    },
  },
  {
    version: '1.30.0',
    date: '2026-03-26',
    changes: {
      en: [
        'Improved: App no longer gets stuck or shows the wrong screen on first launch',
      ],
      fr: [
        'Corrigé : L\'application ne reste plus bloquée ou n\'affiche plus le mauvais écran au premier lancement',
      ],
      arTN: [
        'صلّحنا: التطبيق ما عادش يتعلق أو يعرض الشاشة الغلط عند أول تشغيل',
      ],
    },
  },
  {
    version: '1.29.0',
    date: '2026-03-26',
    changes: {
      en: [
        'Fixed: Exported CSV files now show the correct currency for each transaction',
        'Fixed: Editing a transfer no longer causes incorrect balance changes',
        'Fixed: Budget tracking now works correctly in December',
        'Improved: Sign-in error messages now appear in your chosen language',
      ],
      fr: [
        'Corrigé : Les fichiers CSV exportés affichent maintenant la bonne devise pour chaque transaction',
        'Corrigé : Modifier un virement ne provoque plus de changements de solde incorrects',
        'Corrigé : Le suivi du budget fonctionne maintenant correctement en décembre',
        'Corrigé : Les messages d\'erreur de connexion apparaissent maintenant dans votre langue choisie',
      ],
      arTN: [
        'صلّحنا: ملفات CSV المصدّرة تعرض الآن العملة الصحيحة لكل معاملة',
        'صلّحنا: تعديل التحويل ما عادش يسبب تغييرات غلط في الرصيد',
        'صلّحنا: تتبع الميزانية يخدم صح الآن في ديسمبر',
        'صلّحنا: رسائل خطأ تسجيل الدخول تبان الآن بلغتك المختارة',
      ],
    },
  },
  {
    version: '1.28.0',
    date: '2026-03-25',
    changes: {
      en: [
        'Added: New users now see a welcome screen on their very first launch',
        'Improved: Setting up a PIN now includes a confirmation step to make sure it\'s entered correctly',
      ],
      fr: [
        'Ajouté : Les nouveaux utilisateurs voient maintenant un écran de bienvenue au tout premier lancement',
        'Amélioré : La configuration d\'un PIN inclut maintenant une étape de confirmation pour s\'assurer qu\'il est saisi correctement',
      ],
      arTN: [
        'زدنا: المستخدمون الجدد يشوفون الآن شاشة ترحيب في أول تشغيل',
        'حسّنّا: إعداد الـ PIN يشمل الآن خطوة تأكيد باش تتأكد أنه دخلته صح',
      ],
    },
  },
  {
    version: '1.27.0',
    date: '2026-03-25',
    changes: {
      en: [
        'Added: The gold quick-add button is now always visible, even when scrolling',
      ],
      fr: [
        'Amélioré : Le bouton d\'ajout rapide doré est maintenant toujours visible, même en faisant défiler',
      ],
      arTN: [
        'حسّنّا: زر الإضافة السريعة الذهبي يبان دايمًا الآن، حتى وقت التمرير',
      ],
    },
  },
  {
    version: '1.26.0',
    date: '2026-03-24',
    changes: {
      en: [
        'Added: The Quick Add button is always reachable and no longer scrolls out of view',
      ],
      fr: [
        'Corrigé : Le bouton Ajout Rapide est toujours accessible et ne défile plus hors de la vue',
      ],
      arTN: [
        'صلّحنا: زر الإضافة السريعة وصوله دايمًا ممكن وما عادش يختفي عند التمرير',
      ],
    },
  },
  {
    version: '1.25.0',
    date: '2026-03-24',
    changes: {
      en: [
        'Improved: Subscriptions tab no longer crashes when opened',
      ],
      fr: [
        'Corrigé : L\'onglet Abonnements ne plante plus quand on l\'ouvre',
      ],
      arTN: [
        'صلّحنا: تاب الاشتراكات ما عادش يكرش لما تفتحه',
      ],
    },
  },
  {
    version: '1.24.0',
    date: '2026-03-24',
    changes: {
      en: [
        'Improved: Transactions tab no longer crashes when opened',
        'Improved: Guide tour now starts and runs reliably',
      ],
      fr: [
        'Corrigé : L\'onglet Transactions ne plante plus quand on l\'ouvre',
        'Corrigé : La visite guidée démarre et s\'exécute maintenant de manière fiable',
      ],
      arTN: [
        'صلّحنا: تاب المعاملات ما عادش يكرش لما تفتحه',
        'صلّحنا: جولة الدليل تبدا وتخدم بشكل موثوق الآن',
      ],
    },
  },
  {
    version: '1.23.0',
    date: '2026-03-24',
    changes: {
      en: [
        'Improved: Changelog updated with the latest release notes',
      ],
      fr: [
        'Amélioré : Journal des modifications mis à jour avec les dernières notes de version',
      ],
      arTN: [
        'حسّنّا: سجل التغييرات تحدّث بآخر ملاحظات الإصدار',
      ],
    },
  },
  {
    version: '1.22.0',
    date: '2026-03-24',
    changes: {
      en: [
        'Improved: Pop-up messages now appear in your chosen language',
      ],
      fr: [
        'Corrigé : Les messages pop-up apparaissent maintenant dans votre langue choisie',
      ],
      arTN: [
        'صلّحنا: الرسائل المنبثقة تبان الآن بلغتك المختارة',
      ],
    },
  },
  {
    version: '1.21.0',
    date: '2026-03-24',
    changes: {
      en: [
        'Fixed: Guide tour now starts correctly every time',
      ],
      fr: [
        'Corrigé : La visite guidée démarre maintenant correctement à chaque fois',
      ],
      arTN: [
        'صلّحنا: جولة الدليل تبدا صح كل مرة الآن',
      ],
    },
  },
  {
    version: '1.20.0',
    date: '2026-03-24',
    changes: {
      en: [
        'Improved: Stats and Budgets tabs no longer crash when opened',
      ],
      fr: [
        'Corrigé : Les onglets Statistiques et Budgets ne plantent plus quand on les ouvre',
      ],
      arTN: [
        'صلّحنا: تابات الإحصائيات والميزانيات ما عادش تكرش لما تفتحهم',
      ],
    },
  },
  {
    version: '1.19.0',
    date: '2026-03-22',
    changes: {
      en: [
        'Improved: All tabs open without crashing after the recent tour update',
      ],
      fr: [
        'Corrigé : Tous les onglets s\'ouvrent sans planter après la récente mise à jour de la visite',
      ],
      arTN: [
        'صلّحنا: كل التابات تفتح بدون كراش بعد آخر تحديث للجولة',
      ],
    },
  },
  {
    version: '1.18.0',
    date: '2026-03-22',
    changes: {
      en: [
        'UI: Category icons now show a colored badge for quicker recognition',
        'Improved: Your account balance animates smoothly when it changes',
        'Improved: App launch screen looks more polished',
      ],
      fr: [
        'Ajouté : Les icônes de catégorie affichent maintenant un badge coloré pour une reconnaissance plus rapide',
        'Amélioré : Le solde de votre compte s\'anime en douceur quand il change',
        'Amélioré : L\'écran de lancement de l\'application est plus soigné',
      ],
      arTN: [
        'زدنا: أيقونات الفئات تعرض الآن شارة ملوّنة للتعرف عليها أسرع',
        'حسّنّا: رصيد حسابك يتحرك بسلاسة لما يتغير',
        'حسّنّا: شاشة تشغيل التطبيق ولّت أكثر أناقة',
      ],
    },
  },
  {
    version: '1.17.0',
    date: '2026-03-24',
    changes: {
      en: [
        'Improved: Stats, Accounts, and Settings screens no longer crash',
        'Fixed: Help, Changelog, and Feedback pages open correctly from the menu',
        'Improved: Your settings are fully restored when you load a backup',
        'Fixed: Budget section header text displays correctly',
      ],
      fr: [
        'Corrigé : Les écrans Statistiques, Comptes et Paramètres ne plantent plus',
        'Corrigé : Les pages Aide, Journal des modifications et Retours s\'ouvrent correctement depuis le menu',
        'Corrigé : Vos paramètres sont entièrement restaurés quand vous chargez une sauvegarde',
        'Corrigé : Le texte d\'en-tête de la section Budget s\'affiche correctement',
      ],
      arTN: [
        'صلّحنا: شاشات الإحصائيات والحسابات والإعدادات ما عادش تكرش',
        'صلّحنا: صفحات المساعدة وسجل التغييرات والتغذية الراجعة تفتح صح من القائمة',
        'صلّحنا: إعداداتك تسترجع كاملة لما تحمّل نسخة احتياطية',
        'صلّحنا: نص رأس قسم الميزانية يبان صح',
      ],
    },
  },
  {
    version: '1.16.0',
    date: '2026-03-10',
    changes: {
      en: [
        'Improved: Get notified when you make an unusually large transaction',
        'Improved: Get an alert when any account balance runs low',
        'Improved: Optional daily reminder to log your spending',
      ],
      fr: [
        'Ajouté : Soyez notifié quand vous effectuez une transaction inhabituellement grande',
        'Ajouté : Recevez une alerte quand le solde d\'un compte est faible',
        'Ajouté : Rappel quotidien optionnel pour enregistrer vos dépenses',
      ],
      arTN: [
        'زدنا: تتلقى إشعارًا لما تسجّل معاملة كبيرة بشكل غير عادي',
        'زدنا: تتلقى تنبيهًا لما رصيد أي حساب يولّي منخفض',
        'زدنا: تذكير يومي اختياري لتسجيل مصاريفك',
      ],
    },
  },
  {
    version: '1.15.0',
    date: '2026-02-25',
    changes: {
      en: [
        'Added: A welcome walkthrough introduces the app on first use',
        'Improved: Transactions are now grouped by date for easier browsing',
        'Added: Quick-add button is now gold and easier to spot',
      ],
      fr: [
        'Ajouté : Un tutoriel de bienvenue présente l\'application à la première utilisation',
        'Amélioré : Les transactions sont maintenant regroupées par date pour une navigation plus facile',
        'Amélioré : Le bouton d\'ajout rapide est maintenant doré et plus facile à repérer',
      ],
      arTN: [
        'زدنا: جولة ترحيبية تعرّف بالتطبيق عند أول استخدام',
        'حسّنّا: المعاملات تتجمّع الآن حسب التاريخ للتصفح أسهل',
        'حسّنّا: زر الإضافة السريعة ولّى ذهبي وأسهل للرؤية',
      ],
    },
  },
  {
    version: '1.14.0',
    date: '2026-02-10',
    changes: {
      en: [
        'Added: Quick-add button on the home screen lets you log transactions instantly',
        'Added: App now guides you to create an account before letting you add transactions',
      ],
      fr: [
        'Ajouté : Le bouton d\'ajout rapide sur l\'écran d\'accueil vous permet d\'enregistrer des transactions instantanément',
        'Amélioré : L\'application vous guide maintenant pour créer un compte avant de vous laisser ajouter des transactions',
      ],
      arTN: [
        'زدنا: زر الإضافة السريعة في الشاشة الرئيسية يخلّيك تسجّل معاملات فوري',
        'حسّنّا: التطبيق يرشدك الآن لإنشاء حساب قبل ما يخلّيك تضيف معاملات',
      ],
    },
  },
  {
    version: '1.13.0',
    date: '2026-01-28',
    changes: {
      en: [
        'Improved: In-app guide tour walks you through all the key features',
        'Improved: You can restart the tour anytime from the More tab',
      ],
      fr: [
        'Ajouté : La visite guidée intégrée vous fait découvrir toutes les fonctionnalités clés',
        'Ajouté : Vous pouvez redémarrer la visite à tout moment depuis l\'onglet Plus',
      ],
      arTN: [
        'زدنا: جولة إرشادية داخل التطبيق تعرّفك بكل الميزات الرئيسية',
        'زدنا: تنجم تعيد تشغيل الجولة في أي وقت من تاب المزيد',
      ],
    },
  },
  {
    version: '1.12.0',
    date: '2026-01-15',
    changes: {
      en: [
        'Improved: Statistics screen with charts to visualize your spending',
        'Improved: Filter statistics by time period',
      ],
      fr: [
        'Ajouté : Écran de statistiques avec des graphiques pour visualiser vos dépenses',
        'Ajouté : Filtrez les statistiques par période',
      ],
      arTN: [
        'زدنا: شاشة إحصائيات بمخططات بيانية لتصوّر مصاريفك',
        'زدنا: فلترة الإحصائيات حسب الفترة الزمنية',
      ],
    },
  },
  {
    version: '1.11.0',
    date: '2025-12-20',
    changes: {
      en: [
        'Improved: More tab for quick access to settings and extras',
        'Improved: Filter and search your transactions',
        'Improved: The keyboard no longer covers input fields when typing',
      ],
      fr: [
        'Ajouté : Onglet Plus pour un accès rapide aux paramètres et extras',
        'Ajouté : Filtrez et recherchez vos transactions',
        'Corrigé : Le clavier ne couvre plus les champs de saisie lors de la frappe',
      ],
      arTN: [
        'زدنا: تاب المزيد للوصول السريع للإعدادات والإضافات',
        'زدنا: فلترة وبحث في معاملاتك',
        'صلّحنا: لوحة المفاتيح ما عادش تغطي خانات الإدخال وقت الكتابة',
      ],
    },
  },
  {
    version: '1.10.0',
    date: '2025-12-05',
    changes: {
      en: [
        'Improved: Set budgets to repeat automatically each month',
        'Improved: Subscriptions now show their next billing date',
      ],
      fr: [
        'Ajouté : Définissez des budgets pour qu\'ils se répètent automatiquement chaque mois',
        'Amélioré : Les abonnements affichent maintenant leur prochaine date de facturation',
      ],
      arTN: [
        'زدنا: اضبط الميزانيات باش تتكرر تلقائيًا كل شهر',
        'حسّنّا: الاشتراكات تعرض الآن تاريخ الفاتورة القادمة',
      ],
    },
  },
  {
    version: '1.9.0',
    date: '2025-11-18',
    changes: {
      en: [
        'Improved: Export your data as a CSV or JSON file',
        'Improved: Import transactions from a CSV file',
      ],
      fr: [
        'Ajouté : Exportez vos données en fichier CSV ou JSON',
        'Ajouté : Importez des transactions depuis un fichier CSV',
      ],
      arTN: [
        'زدنا: صدّر بياناتك كملف CSV أو JSON',
        'زدنا: استورد معاملات من ملف CSV',
      ],
    },
  },
  {
    version: '1.8.0',
    date: '2025-11-01',
    changes: {
      en: [
        'Improved: Live currency exchange rates built into the app',
        'Improved: Refresh exchange rates anytime from Settings',
      ],
      fr: [
        'Ajouté : Taux de change en temps réel intégrés dans l\'application',
        'Ajouté : Actualisez les taux de change à tout moment depuis les Paramètres',
      ],
      arTN: [
        'زدنا: أسعار صرف العملات الحية مدمجة في التطبيق',
        'زدنا: تنجم تحدّث أسعار الصرف في أي وقت من الإعدادات',
      ],
    },
  },
  {
    version: '1.7.0',
    date: '2025-10-15',
    changes: {
      en: [
        'Improved: Actions now show a brief confirmation message so you know they worked',
        'Improved: Pick the exact date and time for any transaction',
      ],
      fr: [
        'Amélioré : Les actions affichent maintenant un bref message de confirmation pour que vous sachiez qu\'elles ont fonctionné',
        'Ajouté : Choisissez la date et l\'heure exactes pour n\'importe quelle transaction',
      ],
      arTN: [
        'حسّنّا: الإجراءات تعرض الآن رسالة تأكيد قصيرة باش تعرف أنها خدمت',
        'زدنا: اختر التاريخ والوقت الدقيق لأي معاملة',
      ],
    },
  },
  {
    version: '1.6.0',
    date: '2025-10-11',
    changes: {
      en: [
        'Improved: Choose your default currency during setup',
        'Fixed: Tunisian Dinar amounts were being multiplied by 1000 incorrectly , now resolved',
      ],
      fr: [
        'Ajouté : Choisissez votre devise par défaut lors de la configuration',
        'Corrigé : Les montants en Dinar Tunisien étaient multipliés par 1000 incorrectement , c\'est maintenant résolu',
      ],
      arTN: [
        'زدنا: اختر عملتك الافتراضية وقت الإعداد',
        'صلّحنا: مبالغ الدينار التونسي كانت تتضرب في 1000 غلط , الأمر حُلّ الآن',
      ],
    },
  },
  {
    version: '1.5.0',
    date: '2025-10-08',
    changes: {
      en: [
        'Improved: Toggle to hide all balances with one tap for privacy on the go',
        'Improved: Biometrics and PIN now work together more reliably',
      ],
      fr: [
        'Ajouté : Masquez tous les soldes d\'un seul appui pour la confidentialité en déplacement',
        'Amélioré : La biométrie et le PIN fonctionnent maintenant ensemble de manière plus fiable',
      ],
      arTN: [
        'زدنا: اخفي كل الأرصدة بضغطة واحدة للخصوصية وأنت في الطريق',
        'حسّنّا: البيومتري والـ PIN يخدموا معًا بشكل أكثر موثوقية الآن',
      ],
    },
  },
  {
    version: '1.4.0',
    date: '2025-10-05',
    changes: {
      en: [
        'Improved: Too many wrong PIN attempts? The app locks temporarily (30 seconds, then 5 minutes, then 15 minutes)',
        'Improved: Biometric unlock is automatically managed alongside your PIN',
      ],
      fr: [
        'Amélioré : Trop de tentatives PIN incorrectes ? L\'application se verrouille temporairement (30 secondes, puis 5 minutes, puis 15 minutes)',
        'Amélioré : Le déverrouillage biométrique est automatiquement géré avec votre PIN',
      ],
      arTN: [
        'حسّنّا: دخلت الـ PIN غلط أكثر من اللازم؟ التطبيق يقفل مؤقتًا (30 ثانية، ثم 5 دقائق، ثم 15 دقيقة)',
        'حسّنّا: فتح القفل البيومتري يتدار تلقائيًا مع الـ PIN ديالك',
      ],
    },
  },
  {
    version: '1.3.0',
    date: '2025-10-01',
    changes: {
      en: [
        'Improved: Updated to the latest app framework for better performance and stability',
        'Fixed: Hidden balances setting is now saved correctly between sessions',
        'Improved: Your default currency is remembered after closing the app',
        'Improved: App launch transition looks smoother',
      ],
      fr: [
        'Amélioré : Mise à jour vers le dernier framework pour de meilleures performances et stabilité',
        'Corrigé : Le paramètre de masquage des soldes est maintenant sauvegardé correctement entre les sessions',
        'Corrigé : Votre devise par défaut est mémorisée après la fermeture de l\'application',
        'Amélioré : La transition de lancement de l\'application est plus fluide',
      ],
      arTN: [
        'حسّنّا: تحديث لآخر إطار عمل للتطبيق لأداء واستقرار أحسن',
        'صلّحنا: إعداد إخفاء الأرصدة يتحفظ صح الآن بين الجلسات',
        'صلّحنا: عملتك الافتراضية تتذكّر بعد إغلاق التطبيق',
        'حسّنّا: انتقال تشغيل التطبيق ولّى أسلس',
      ],
    },
  },
  {
    version: '1.2.0',
    date: '2025-09-28',
    changes: {
      en: [
        'Improved: Back up your data as a JSON file and restore it anytime',
        'Improved: Import transactions from a CSV file',
        'Improved: Set a default currency for the whole app',
        'Improved: Toggle individual notification types on or off',
        'Improved: Full translation support across the app',
      ],
      fr: [
        'Ajouté : Sauvegardez vos données en fichier JSON et restaurez-les à tout moment',
        'Ajouté : Importez des transactions depuis un fichier CSV',
        'Ajouté : Définissez une devise par défaut pour toute l\'application',
        'Ajouté : Activez ou désactivez chaque type de notification individuellement',
        'Ajouté : Support de traduction complet dans toute l\'application',
      ],
      arTN: [
        'زدنا: احتفظ ببياناتك كملف JSON واسترجعها في أي وقت',
        'زدنا: استورد معاملات من ملف CSV',
        'زدنا: اضبط عملة افتراضية لكل التطبيق',
        'زدنا: فعّل أو عطّل كل نوع إشعار على حدة',
        'زدنا: دعم كامل للترجمة في كل التطبيق',
      ],
    },
  },
  {
    version: '1.1.0',
    date: '2025-09-25',
    changes: {
      en: [
        'Improved: Unlock the app with your fingerprint or Face ID',
        'Improved: Choose your currency inside the app',
        'Improved: Subscriptions now appear in the main navigation',
        'Added: A Changelog screen so you can always see what\'s new',
        'Fixed: Billing calculations and CSV exports work correctly',
      ],
      fr: [
        'Ajouté : Déverrouillez l\'application avec votre empreinte digitale ou Face ID',
        'Ajouté : Choisissez votre devise dans l\'application',
        'Ajouté : Les abonnements apparaissent maintenant dans la navigation principale',
        'Ajouté : Un écran Journal des modifications pour toujours voir les nouveautés',
        'Corrigé : Les calculs de facturation et les exports CSV fonctionnent correctement',
      ],
      arTN: [
        'زدنا: افتح التطبيق ببصمتك أو Face ID',
        'زدنا: اختر عملتك داخل التطبيق',
        'زدنا: الاشتراكات تبان الآن في التنقل الرئيسي',
        'زدنا: شاشة سجل التغييرات باش تشوف دايمًا الجديد',
        'صلّحنا: حسابات الفواتير وتصدير CSV يخدموا صح',
      ],
    },
  },
  {
    version: '1.0.0',
    date: '2025-09-22',
    changes: {
      en: [
        'Added: First release of Khazinti 🎉',
        'Improved: Manage multiple accounts (bank, cash, wallet, savings)',
        'Added: Add income and expense transactions with categories',
        'Improved: Set and track monthly budgets',
        'Improved: Dashboard overview of your finances',
        'Improved: Light and dark theme support',
        'Improved: Export data to CSV',
        'Improved: Secure your app with a PIN',
      ],
      fr: [
        'Ajouté : Première version de Khazinti 🎉',
        'Amélioré : Gérez plusieurs comptes (banque, espèces, portefeuille, épargne)',
        'Ajouté : Ajoutez des transactions de revenus et de dépenses avec des catégories',
        'Amélioré : Définissez et suivez des budgets mensuels',
        'Amélioré : Tableau de bord de vos finances',
        'Amélioré : Support des thèmes clair et sombre',
        'Amélioré : Exportez vos données en CSV',
        'Amélioré : Sécurisez votre application avec un PIN',
      ],
      arTN: [
        'حسّنّا: أول إصدار من خزينتي 🎉',
        'حسّنّا: دير حسابات متعددة (بنك، نقدية، محفظة، توفير)',
        'حسّنّا: زد معاملات دخل ومصاريف مع فئات',
        'حسّنّا: اضبط وتابع ميزانيات شهرية',
        'حسّنّا: لوحة تحكم لماليتك',
        'حسّنّا: دعم الثيم الفاتح والداكن',
        'حسّنّا: صدّر بياناتك لـ CSV',
        'حسّنّا: أمّن تطبيقك بـ PIN',
      ],
    },
  },
];
