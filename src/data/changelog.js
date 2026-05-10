export function getChanges(entry, lang) {
  if (Array.isArray(entry.changes)) return entry.changes;
  return entry.changes[lang] ?? entry.changes['en'];
}

export const CHANGELOG = [
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
        'تصليح: مشكلة شاشة البداية في الأندرويد',
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
        "Corrigé : Devise hors-ligne n'affiche plus de montants erronés",
        'Amélioré : Couleurs barre de progression budget selon le % consommé',
      ],
      arTN: [
        'تصليح: التنبيهات تتحاذى لليمين بالعربي',
        'تصليح: التواريخ متوافقة بين الصفحة الرئيسية وصفحة الاشتراكات',
        'تصليح: كروت الانتظار تاخذ العرض الكامل',
        'تصليح: المبالغ الكبيرة ما تخرجش من الكارت',
        'تصليح: العملة بدون انترنت ما تعطيش مبالغ غالطة',
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
        "Correction du layout RTL pour l'arabe (toast + cartes abonnement)",
        'Correction de la locale des dates (mois en français)',
        'Correction du bug timezone sur la date de facturation journalière',
        'Ajout de limites de longueur sur tous les champs de formulaire',
      ],
      arTN: [
        'نظام إشعارات موحّد (toast واحد في الأسفل)',
        'تصليح النص المقطوع في الإشعارات',
        'تصليح تخطيط RTL بالعربي (toast + كروت الاشتراكات)',
        'تصليح لغة التواريخ (الأشهر بالفرنسية تظهر صحيحة)',
        'تصليح مشكل timezone في تاريخ الدفع اليومي',
        'إضافة حدود طول على كل حقول الفورم',
      ],
    },
  },
  {
    version: '1.40.2',
    date: '2026-05-03',
    changes: {
      en: [
        'Fixed subscription toast messages showing raw translation keys',
        'Added time to confirmed subscription transactions',
        'Fixed scrolling issue when multiple pending subscriptions are present',
        'Added billing date display on pending subscription cards',
        'Added optional category selector to subscription form',
      ],
      fr: [
        'Correction des messages de confirmation affichant des clés brutes',
        'Ajout de l\'heure aux transactions d\'abonnement confirmées',
        'Correction du problème de défilement avec plusieurs abonnements en attente',
        'Ajout de la date de facturation sur les cartes d\'abonnement en attente',
        'Ajout d\'un sélecteur de catégorie optionnel au formulaire d\'abonnement',
      ],
      arTN: [
        'إصلاح إشعارات الاشتراكات اللي كانت تظهر فيها أكواد الترجمة',
        'إضافة الوقت لمعاملات الاشتراكات المؤكدة',
        'إصلاح مشكلة التمرير كي يبدا فما برشا اشتراكات مستحقة',
        'إضافة تاريخ الفوترة في بطاقات الاشتراكات المستحقة',
        'إضافة اختيار الفئة (اختياري) في نموذج الاشتراك',
      ],
    },
  },
  {
    version: '1.40.1',
    date: '2026-05-02',
    changes: {
      en: [
        'Fixed: Confirm button now works correctly for pending subscriptions',
        'Pending subscriptions update in real-time (no restart needed)',
        'Confirm/Skip buttons now available on the Subscriptions tab too',
      ],
      fr: [
        'Correction : le bouton Confirmer fonctionne maintenant correctement',
        'Les abonnements en attente se mettent à jour en temps réel',
        'Boutons Confirmer/Ignorer disponibles aussi dans l\'onglet Abonnements',
      ],
      arTN: [
        'إصلاح: زر التأكيد يعمل الآن بشكل صحيح',
        'الاشتراكات المستحقة تتحدث في الوقت الحقيقي',
        'أزرار التأكيد/التخطي متاحة أيضاً في صفحة الاشتراكات',
      ],
    },
  },
  {
    version: '1.40.0',
    date: '2026-05-01',
    changes: {
      en: [
        'Subscriptions now require manual confirmation before impacting your finances',
        'New Pending Subscriptions section on Dashboard',
        'Confirm or Skip each billing cycle manually',
        'Fixed: billing date now saves correctly when editing a subscription',
        'Fixed: auto-processing of subscriptions on app open removed',
      ],
      fr: [
        'Les abonnements nécessitent désormais une confirmation manuelle',
        'Nouvelle section « Abonnements en attente » sur le tableau de bord',
        'Confirmez ou ignorez chaque cycle de facturation manuellement',
        'Correction : la date de facturation est maintenant sauvegardée correctement',
        'Correction : les abonnements ne se traitent plus automatiquement au démarrage',
      ],
      arTN: [
        'الاشتراكات تحتاج الآن لتأكيد يدوي قبل التأثير على ميزانيتك',
        'قسم جديد "الاشتراكات المستحقة" في لوحة التحكم',
        'أكّد أو تخطَّ كل دورة فوترة يدوياً',
        'إصلاح: تاريخ الفوترة يُحفظ بشكل صحيح عند التعديل',
        'إصلاح: إيقاف المعالجة التلقائية للاشتراكات عند فتح التطبيق',
      ],
    },
  },
  {
    version: '1.39.31',
    date: '2026-05-01',
    changes: {
      en: [
        'Improved: Amount fields now use natural left-to-right number entry with currency on the right',
      ],
      fr: [
        'Amélioré : Les champs montant utilisent maintenant une saisie naturelle gauche-droite avec la devise à droite',
      ],
      arTN: [
        'حسّنّا: خانات المبلغ ولّات بالكتابة الطبيعية من اليسار لليمين والعملة على اليمين',
      ],
    },
  },
  {
    version: '1.39.30',
    date: '2026-05-01',
    changes: {
      en: [
        'Improved: Dashboard sections now show the current month context',
        'Fixed: Cursor behavior on amount fields in Arabic mode',
      ],
      fr: [
        'Amélioré : Les sections du tableau de bord affichent maintenant le mois en cours',
        'Corrigé : Correction du curseur dans les champs montant en mode arabe',
      ],
      arTN: [
        'حسّنّا: أقسام لوحة التحكم تبيّن الشهر الحالي توّا',
        'صلّحنا: تصلّح الكرسور في خانات المبلغ في الوضع العربي',
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
        'Polish: Gold border on focused inputs — all 5 forms',
        'Polish: DETAILS divider added to transaction form',
        'Polish: OVERVIEW label inverted — month is now the visual anchor',
      ],
      fr: [
        'Corrigé : Le budget bloque maintenant les doublons de catégorie en mode récurrent',
        'Corrigé : Curseur doré visible sur tous les champs de saisie',
        'Corrigé : Placeholder du nom de catégorie traduit dans toutes les langues',
        'Déplacé : Réinitialisation usine déplacée de Plus vers Paramètres',
        'Changé : Icône cochon remplacée par cible (budgets) et coffre (épargne)',
        'Ajouté : Le tableau de bord affiche le mois en cours (ex : « mai 2026 »)',
        'Polissage : Bordure dorée sur les champs actifs — tous les 5 formulaires',
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
        'Fixed: Onboarding blocked on currency selection screen — user identity now created automatically',
        'Fixed: Welcome step 2 redesigned with Privacy & Offline USP cards',
        'Fixed: Welcome step 3 restored',
      ],
      fr: [
        'Corrigé : Blocage lors de la sélection de la devise à l\'accueil — l\'identité utilisateur est maintenant créée automatiquement',
        'Corrigé : Étape 2 de l\'accueil redessinée avec les cartes Confidentialité & Hors-ligne',
        'Corrigé : Étape 3 de l\'accueil restaurée',
      ],
      arTN: [
        'صلّحنا: كانت الأبليكاشن تعلق في صفحة اختيار العملة — صلّحنا الأمر، راه يخلق حسابك وحده',
        'صلّحنا: صفحة الترحيب 2 تغيّرت — صلّحنا الأمر، راه يعلم بالخصوصية والعمل بدون إنترنت',
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
        'Fixed: Transaction time always visible — moved to right column',
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
        'Corrigé : L\'heure de transaction est toujours visible — déplacée dans la colonne de droite',
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
        'صلّحنا: وقت المعاملة يبان دايمًا — نقلناه للعمود الأيمن',
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
        'Improved: Tunisian Arabic rewritten in authentic Darija — more natural and casual',
        'Improved: Currency names now display in your chosen language',
        'Improved: Currency picker shows all 16 supported currencies',
        'Improved: Currency search now works in your current language',
      ],
      fr: [
        'Amélioré : L\'arabe tunisien réécrit en Darija authentique — plus naturel et décontracté',
        'Amélioré : Les noms de devises s\'affichent maintenant dans votre langue choisie',
        'Amélioré : Le sélecteur de devise affiche les 16 devises supportées',
        'Corrigé : La recherche de devise fonctionne maintenant dans votre langue actuelle',
      ],
      arTN: [
        'حسّنّا: العربية التونسية تبدّلت بدارجة حقيقية — أطبع وأقرب',
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
        'Improved: Forgetting your PIN now clearly explains that recovery requires a full app reset — no surprises',
        'Improved: A Factory Reset option is available if you ever need a completely fresh start',
        'Added: The quick-add button background is now a deep navy for better contrast',
        'Added: Quick-add buttons are larger and easier to tap',
      ],
      fr: [
        'Amélioré : Oublier votre PIN explique maintenant clairement que la récupération nécessite une réinitialisation complète — sans surprises',
        'Ajouté : Une option de réinitialisation d\'usine est disponible si vous avez besoin de repartir de zéro',
        'Amélioré : L\'arrière-plan du bouton d\'ajout rapide est maintenant bleu marine profond pour un meilleur contraste',
        'Amélioré : Les boutons d\'ajout rapide sont plus grands et plus faciles à appuyer',
      ],
      arTN: [
        'حسّنّا: نسيان الـ PIN يشرح الآن بوضوح أن الاسترجاع يحتاج إعادة ضبط كاملة — بلا مفاجآت',
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
        'Fixed: Tunisian Dinar (TND) amounts were being converted incorrectly — this is now resolved',
        'Fixed: Subscription billing dates and amounts now calculate correctly',
        'Fixed: Income totals now add up correctly',
        'Improved: Error messages now appear in your chosen language',
      ],
      fr: [
        'Corrigé : Les montants en Dinar Tunisien (TND) étaient convertis incorrectement — c\'est maintenant résolu',
        'Corrigé : Les dates et montants de facturation des abonnements se calculent maintenant correctement',
        'Corrigé : Les totaux de revenus s\'additionnent maintenant correctement',
        'Corrigé : Les messages d\'erreur apparaissent maintenant dans votre langue choisie',
      ],
      arTN: [
        'صلّحنا: مبالغ الدينار التونسي (TND) كانت تتحوّل غلط — الأمر حُلّ الآن',
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
        'Fixed: Tunisian Dinar amounts were being multiplied by 1000 incorrectly — now resolved',
      ],
      fr: [
        'Ajouté : Choisissez votre devise par défaut lors de la configuration',
        'Corrigé : Les montants en Dinar Tunisien étaient multipliés par 1000 incorrectement — c\'est maintenant résolu',
      ],
      arTN: [
        'زدنا: اختر عملتك الافتراضية وقت الإعداد',
        'صلّحنا: مبالغ الدينار التونسي كانت تتضرب في 1000 غلط — الأمر حُلّ الآن',
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
