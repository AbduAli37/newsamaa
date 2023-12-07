import Pagination from "@/src/components/Pagination";
import Layout from "@/src/layout/Layout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export const products = [
  {
    id: 1,
    category_id: 1,
    product_image: "/assets/siteimage/prod1.png",
    product_name: "أجهزة الحضور والانصراف",
    product_description:
      "تعتبر أجهزة الحضور والانصراف حلاً متقدمًا لإدارة الحضور والانصراف في المؤسسات. تدعم هذه الأجهزة التكنولوجيا البصرية والبيومترية لضمان دقة وأمان عاليين في تسجيل الحضور والانصراف.",
  },
  {
    id: 2,
    category_id: 1,
    product_image: "/assets/siteimage/prod2.png",
    product_name: "أجهزة التحكم بالأبواب",
    product_description:
      "تقدم أجهزة التحكم بالأبواب حلاً فعالًا لتأمين المداخل والمخارج. تتيح هذه الأجهزة إمكانية إدارة الوصول بشكل ذكي، حيث يمكن تعيين صلاحيات مختلفة للمستخدمين وتسجيل الحركات بشكل دقيق.",
  },
  {
    id: 3,
    category_id: 1,
    product_image: "/assets/siteimage/prod3.png",
    product_name: "أجهزة التحكم بالأبواب",
    product_description:
      "تعتبر أجهزة التحكم بالأبواب حلاً مبتكرًا لتوفير أمان إضافي في المؤسسات والمنازل. يمكن تكوين هذه الأجهزة للتحكم في فتح وإغلاق الأبواب بشكل فعال، مع ميزات تحكم متقدمة لضمان الأمان الشامل.",
  },
  {
    category_id: 3,
    id: 3,
    product_image: "/assets/siteimage/cat2.png",
    product_name: "اجهزة السنترال والفاكس",
    product_description:
      "تقدم أجهزة السنترال والفاكس حلاً شاملاً لإدارة اتصالات الأعمال بشكل فعّال. تعمل هذه الأجهزة على تسهيل التواصل الداخلي والخارجي، وتدعم وظائف متقدمة مثل التحكم في المكالمات وتسجيل الرسائل الصوتية وإدارة الفاكسات بكفاءة عالية.",
  },
  {
    id: 4,
    product_image: "/assets/siteimage/prod4.png",
    category_id: 4,
    product_name: "طابعات الكروت البلاستيكية وطابعاتها",
    product_description:
      "تقدم طابعات الكروت البلاستيكية وطابعاتها حلاً فعّالاً لإنتاج وطباعة البطاقات البلاستيكية بجودة عالية. تتميز هذه الطابعات بتقنيات متقدمة للطباعة وإمكانيات تخصيص واسعة، مما يجعلها مثالية لإنتاج بطاقات الهوية، بطاقات العضوية، والبطاقات الخاصة بالمؤسسات.",
  },
  {
    id: 5,
    product_image: "/assets/siteimage/prod5.png",
    category_id: 4,
    product_name: "طابعات الكروت البلاستيكية وطابعاتها",
    product_description:
      "تعد طابعات الكروت البلاستيكية وطابعاتها حلاً فريدًا للطباعة على البطاقات البلاستيكية بشكل سهل وفعّال. يتيح تصميمها المتقدم والتقنيات الحديثة إمكانية إنتاج بطاقات مخصصة بجودة عالية وبسرعة.",
  },
  {
    id: 6,
    product_image: "/assets/siteimage/prod6.png",
    category_id: 4,
    product_name: "طابعات الكروت البلاستيكية وطابعاتها",
    product_description:
      "تقدم هذه الطابعات تجربة طباعة متقدمة للبطاقات البلاستيكية، مع إمكانيات تخصيص شاملة. تناسب مجموعة واسعة من التطبيقات بما في ذلك بطاقات العضوية والهويات الشخصية.",
  },
  {
    id: 7,
    product_image: "/assets/siteimage/prod7.png",
    category_id: 4,
    product_name: "طابعات الكروت البلاستيكية وطابعاتها",
    product_description:
      "مع تقنيات الطباعة الحديثة والسرعة الفائقة، تعتبر هذه الطابعات الخيار الأمثل لإنتاج البطاقات البلاستيكية بكفاءة عالية ودقة فائقة.",
  },
  {
    id: 8,
    product_image: "/assets/siteimage/prod8.png",
    category_id: 4,
    product_name: "طابعات الكروت البلاستيكية وطابعاتها",
    product_description:
      "تمتاز هذه الطابعات بالمرونة والكفاءة، حيث تدعم تصميمًا متقدمًا وإمكانيات تخصيص واسعة لتلبية احتياجات الطباعة على البطاقات البلاستيكية.",
  },
  {
    id: 9,
    product_image: "/assets/siteimage/prod9.png",
    category_id: 4,
    product_name: "طابعات الكروت البلاستيكية وطابعاتها",
    product_description:
      "توفر هذه الطابعات حلاً شاملاً لإنتاج البطاقات البلاستيكية بجودة عالية وفعالية. تتميز بتقنيات طباعة متقدمة وإمكانيات تخصيص تجعلها مثالية لمختلف التطبيقات.",
  },
  {
    id: 10,
    product_image: "/assets/siteimage/prod10.png",
    category_id: 4,
    product_name: "طابعات الكروت البلاستيكية وطابعاتها",
    product_description:
      "تعتبر هذه الطابعات حلاً فعّالًا لإنتاج البطاقات البلاستيكية بجودة عالية وسرعة مذهلة. مع وظائف تخصيص متقدمة، تلبي احتياجات متنوعة للطباعة على البطاقات البلاستيكية.",
  },
  {
    id: 11,
    product_image: "/assets/siteimage/prod11.png",
    category_id: 4,
    product_name: "طابعات الكروت البلاستيكية وطابعاتها",
    product_description:
      "تمنحك هذه الطابعة القدرة على طباعة البطاقات البلاستيكية بجودة استثنائية وبأداء فائق. تتميز بتصميم عصري ومواصفات تقنية تلبي احتياجات الطباعة المتقدمة.",
  },
  {
    id: 12,
    product_image: "/assets/siteimage/prod17.png",
    product_name: "بوابات انذار الملابس",
    product_description:
      "تقدم بوابات انذار الملابس حلاً فعالاً لحماية الملابس والمنتجات ذات القيمة في المتاجر. تمنع هذه البوابات السرقات وتوفر حلاً أمنًا للحفاظ على السلع داخل المتجر.",
    category_id: 6,
  },
  {
    id: 13,
    product_image: "/assets/siteimage/prod18.png",
    product_name: "بوابات انذار الملابس",
    product_description:
      "تعتبر بوابات انذار الملابس جزءًا أساسيًا من نظام الحماية في المتاجر. تقوم بمنع محاولات السرقة وتوفر راحة البال للتجار في الحفاظ على جودة وكمية الملابس في المتجر.",
    category_id: 6,
  },
  {
    id: 14,
    product_image: "/assets/siteimage/prod16.png",
    product_name: "انظمة كاميرات المراقبة",
    product_description:
      "توفر انظمة كاميرات المراقبة رصدًا فعّالًا للأماكن والأنشطة. تستخدم في مختلف البيئات لتحسين الأمان وتوفير مراقبة مستمرة وفعّالة.",
    category_id: 7,
  },
  {
    id: 15,
    product_image: "/assets/siteimage/prod19.png",
    product_name: "انظمة كوالين الفنادق وموفرات الطاقه",
    product_description:
      "تقدم انظمة كوالين الفنادق وموفرات الطاقة حلاً شاملاً لإدارة استهلاك الطاقة في الفنادق. تعتمد على تكنولوجيا حديثة لتحسين كفاءة استهلاك الطاقة وتوفير تجربة مريحة للنزلاء.",
    category_id: 8,
  },
  {
    id: 17,
    product_image: "/assets/siteimage/prod20.png",
    product_name: "انظمة كوالين الفنادق وموفرات الطاقه",
    product_description:
      "تعتبر انظمة كوالين الفنادق وموفرات الطاقة حلاً متقدمًا لتحسين كفاءة استهلاك الطاقة في الفنادق. تقدم حلولًا مبتكرة لتلبية احتياجات إدارة الطاقة.",
    category_id: 8,
  },
  {
    id: 18,
    product_image: "/assets/siteimage/prod21.png",
    product_name: "انظمة كوالين الفنادق وموفرات الطاقه",
    product_description:
      "توفر انظمة كوالين الفنادق وموفرات الطاقة حلاً متكاملًا لتحسين الكفاءة الطاقية وتقديم تجربة مريحة للنزلاء. تعتمد على تقنيات حديثة للتحكم الذكي في استهلاك الطاقة.",
    category_id: 8,
  },
  {
    id: 19,
    product_image: "/assets/siteimage/prod22.png",
    product_name: "انظمة كوالين الفنادق وموفرات الطاقه",
    product_description:
      "تعتبر انظمة كوالين الفنادق وموفرات الطاقة حلاً شاملاً لتحسين الكفاءة الطاقية وتوفير التكاليف. تقدم حلاً مبتكرًا لإدارة الطاقة في مجالات متنوعة.",
    category_id: 8,
  },
  {
    id: 20,
    product_image: "/assets/siteimage/prod24.png",
    category_id: 5,
    product_name:
      "اجهزة صفوف الانتظار والخدمة الذاتيه للبنوك والمستشفيات والجهات الحكوميه",
    product_description:
      "تمنحك هذه الأجهزة القدرة على تنظيم صفوف الانتظار بفعالية وتوفير خدمة ذاتية للزوار في المؤسسات مثل البنوك والمستشفيات والجهات الحكومية. تساعد في تحسين تجربة الزوار وتقديم خدمة أكثر فاعلية.",
  },
  {
    id: 21,
    product_image: "/assets/siteimage/prod25.png",
    category_id: 5,
    product_name:
      "اجهزة صفوف الانتظار والخدمة الذاتيه للبنوك والمستشفيات والجهات الحكوميه",
    product_description:
      "تقدم هذه الأجهزة حلاً متكاملاً لتنظيم صفوف الانتظار وتوفير خدمة ذاتية للزوار في المؤسسات الكبيرة. تسهم في تحسين كفاءة الخدمة وتقديم تجربة سلسة للزوار.",
  },
  {
    id: 22,
    product_image: "/assets/siteimage/prod26.png",
    category_id: 5,
    product_name:
      "اجهزة صفوف الانتظار والخدمة الذاتيه للبنوك والمستشفيات والجهات الحكوميه",
    product_description:
      "تعتبر هذه الأجهزة جزءًا أساسيًا من تحسين خدمات الانتظار وتقديم خدمة ذاتية للزوار. تسهم في تحسين تجربة الزوار وتقديم حلاً فعالاً لتنظيم الانتظار.",
  },
  {
    id: 23,
    product_image: "/assets/siteimage/prod23.png",
    category_id: 5,
    product_name:
      "اجهزة صفوف الانتظار والخدمة الذاتيه للبنوك والمستشفيات والجهات الحكوميه",
    product_description:
      "توفر هذه الأجهزة تجربة خدمة ذاتية فعالة للزوار في المؤسسات الحيوية مثل المستشفيات والبنوك. تقوم بتحسين تنظيم الصفوف وتقديم خدمة فعّالة للزوار.",
  },

  {
    id: 24,
    product_image: "/assets/siteimage/prod29.png",
    category_id: 9,
    product_name: "طابعات الباركود وقوارئ الباركود",
    product_description:
      "تقدم هذه الطابعات الباركود وقوارئ الباركود حلاً متقدمًا للمؤسسات الحيوية، فهي تسهم في تنظيم صفوف الانتظار بفعالية وتقديم خدمة ذاتية فعّالة للزوار. بفضل قدراتها الفائقة في قراءة الباركود، تعزز هذه الأجهزة تجربة الزوار وتحسن جودة الخدمة.",
  },
  {
    id: 25,
    product_image: "/assets/siteimage/prod30.png",
    category_id: 9,
    product_name: "طابعات الباركود وقوارئ الباركود",
    product_description:
      "تعتبر هذه الأجهزة حلاً متكاملاً لتنظيم صفوف الانتظار وتقديم خدمة ذاتية للزوار في المؤسسات الكبيرة. تتميز بتكنولوجيا متقدمة في قراءة الباركود، مما يساهم في تحسين كفاءة الخدمة وتوفير تجربة سلسة للزوار.",
  },
  {
    id: 27,
    product_image: "/assets/siteimage/prod31.png",
    category_id: 9,
    product_name: "طابعات الباركود وقوارئ الباركود",
    product_description:
      "تمثل هذه الأجهزة جزءًا أساسيًا من تحسين خدمات الانتظار وتقديم خدمة ذاتية للزوار. تتميز بقدرتها على قراءة الباركود بدقة عالية، مما يساهم في تحسين تجربة الزوار وتقديم حلاً فعّالاً لتنظيم الانتظار.",
  },
  {
    id: 28,
    product_image: "/assets/siteimage/prod32.png",
    category_id: 9,
    product_name: "طابعات الباركود وقوارئ الباركود",
    product_description:
      "تقدم هذه الأجهزة تجربة خدمة ذاتية فعّالة للزوار في المؤسسات الحيوية مثل المستشفيات والبنوك. بفضل تقنياتها المتقدمة، تعمل على تحسين تنظيم الصفوف وتقديم خدمة فعّالة للزوار.",
  },

  {
    id: 29,
    product_image: "/assets/siteimage/prod34.png",
    category_id: 10,
    product_name: "نداء الكافيهات والمطاعم",
    product_description:
      "تقدم هذه الأجهزة حلاً مبتكرًا للكافيهات والمطاعم، حيث تسهم في تنظيم الخدمة بشكل فعّال وتحسين تجربة الزبائن. بتقنياتها الحديثة في قراءة الباركود، تعمل على تسريع عمليات الخدمة وتحسين الكفاءة العامة.",
  },
  {
    id: 30,
    product_image: "/assets/siteimage/prod35.png",
    category_id: 10,
    product_name: "نداء الكافيهات والمطاعم",
    product_description:
      "تعتبر هذه الأجهزة حلاً متكاملاً لتحسين تنظيم الخدمة في الكافيهات والمطاعم الكبيرة. تتميز بتكنولوجيا متقدمة في قراءة الباركود، مما يساعد في تحسين كفاءة الخدمة وتقديم تجربة سلسة للزبائن.",
  },
  {
    id: 31,
    product_image: "/assets/siteimage/prod36.png",
    category_id: 10,
    product_name: "نداء الكافيهات والمطاعم",
    product_description:
      "تمثل هذه الأجهزة حلاً فعّالًا لتحسين خدمات الانتظار وتقديم خدمة ذاتية للزوار في الكافيهات والمطاعم. تتميز بقدرتها على قراءة الباركود بدقة عالية، مما يسهم في تحسين تجربة الزبائن وتقديم حلاً مبتكرًا لتنظيم الخدمة.",
  },
  {
    id: 32,
    product_image: "/assets/siteimage/prod37.png",
    category_id: 10,
    product_name: "نداء الكافيهات والمطاعم",
    product_description:
      "تقدم هذه الأجهزة تجربة خدمة ذاتية متطورة للزوار في الكافيهات والمطاعم. بفضل تقنياتها المتقدمة، تعمل على تحسين تنظيم الصفوف وتقديم خدمة فعّالة ومبتكرة للزبائن.",
  },
  {
    id: 33,
    product_image: "/assets/siteimage/prod38.png",
    category_id: 11,
    product_name: "انظمة مواقف السيارات",
    product_description:
      "تعتبر هذه الأجهزة حلاً متكاملاً لتحسين تنظيم مواقف السيارات، حيث تساهم في تسهيل وتنظيم عمليات وقوف السيارات بفعالية. بتكنولوجيا متقدمة في قراءة الباركود، تعمل على تحسين كفاءة استخدام المساحات وتقديم تجربة مريحة للمستخدمين.",
  },
  {
    id: 34,
    product_image: "/assets/siteimage/prod39.png",
    category_id: 11,
    product_name: "انظمة مواقف السيارات",
    product_description:
      "تقدم هذه الأجهزة تجربة فريدة لتحسين تنظيم مواقف السيارات في المناطق المزدحمة. بفضل التقنيات المتقدمة في قراءة الباركود، تساعد في تحقيق أقصى استفادة من المساحات المتاحة وتسهيل عمليات البحث عن مواقف للسيارات.",
  },
  {
    id: 35,
    product_image: "/assets/siteimage/prod40.png",
    category_id: 11,
    product_name: "انظمة مواقف السيارات",
    product_description:
      "تمتاز هذه الأجهزة بأداء متميز يسهم في تحسين تجربة وقوف السيارات. تعتبر حلاً فعّالًا لتنظيم المواقف في المناطق الحضرية، حيث تعتمد على تكنولوجيا قراءة الباركود لتحسين الكفاءة وتقديم خدمة مريحة وفعّالة.",
  },
  {
    id: 36,
    product_image: "/assets/siteimage/prod41.png",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تمتاز هذه الأجهزة بأداء متميز يسهم في تحسين تجربة وقوف السيارات. تعتبر حلاً فعّالًا لتنظيم المواقف في المناطق الحضرية، حيث تعتمد على تكنولوجيا قراءة الباركود لتحسين الكفاءة وتقديم خدمة مريحة وفعّالة.",
  },
  {
    id: 37,
    product_image: "/assets/siteimage/prod42.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تعتبر هذه الأجهزة حلاً مبتكرًا لتنظيم وقوف السيارات في المناطق المكتظة. تتميز بأداء عالي وتقنية فعالة في قراءة الباركود، مما يساعد في تحسين التنظيم وتوفير تجربة مريحة للمستخدمين.",
  },
  {
    id: 38,
    product_image: "/assets/siteimage/prod43.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تحقق هذه الأجهزة توازنًا مثاليًا بين الأداء المتميز وتصميم عصري. تعتبر حلاً موثوقًا لتنظيم وقوف السيارات في المناطق الحضرية، حيث توفر تجربة مستخدم فعّالة ومريحة.",
  },
  {
    id: 39,
    product_image: "/assets/siteimage/prod44.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تصميم مبتكر يجمع بين الأناقة والأداء الفائق. تعتبر هذه الأجهزة حلاً فعّالًا لتنظيم وقوف السيارات، حيث توفر فعالية عالية في استخدام المساحات وتجربة سلسة للمستخدمين.",
  },
  {
    id: 40,
    product_image: "/assets/siteimage/prod45.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تصميم عصري يجمع بين الأناقة والأداء المتميز. تقدم هذه الأجهزة حلاً مبتكرًا لتنظيم وقوف السيارات في المناطق الحضرية، مع تحسين كفاءة الاستخدام وتوفير تجربة مريحة للسائقين.",
  },
  {
    id: 41,
    product_image: "/assets/siteimage/prod46.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تصميم فريد يعكس التفرد والأداء الاستثنائي. تعتبر هذه الأجهزة حلاً مبتكرًا لتنظيم وقوف السيارات في المناطق الحضرية، مع توفير تجربة مستخدم فريدة وكفاءة في استخدام المساحات.",
  },
  {
    id: 42,
    product_image: "/assets/siteimage/prod47.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تصميم متطور يجمع بين الأناقة والأداء المتميز. تقدم هذه الأجهزة حلاً فعّالًا لتنظيم وقوف السيارات في المناطق الحضرية، مع تحقيق توازن مثالي بين الكفاءة وتجربة مريحة.",
  },
  {
    id: 43,
    product_image: "/assets/siteimage/prod48.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تصميم عصري وأداء متميز يضفيان طابعًا فريدًا على تجربة وقوف السيارات. تعتبر هذه الأجهزة حلاً مبتكرًا لتنظيم المواقف في المناطق الحضرية، مع رفع مستوى الكفاءة والراحة.",
  },
  {
    id: 44,
    product_image: "/assets/siteimage/prod49.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تصميم حديث يتيح تجربة استثنائية لوقوف السيارات. تعتبر هذه الأجهزة حلاً فعّالًا لتنظيم وقوف السيارات في المناطق الحضرية، مع توفير كفاءة ممتازة وتجربة مريحة للمستخدمين.",
  },
  {
    id: 45,
    product_image: "/assets/siteimage/prod50.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تصميم مبتكر يجمع بين الأناقة والأداء المتميز. تقدم هذه الأجهزة حلاً فعّالًا لتنظيم وقوف السيارات في المناطق الحضرية، مع تحسين كفاءة الاستخدام وتوفير تجربة مريحة للسائقين.",
  },
  {
    id: 46,
    product_image: "/assets/siteimage/prod51.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تصميم عصري يجمع بين الأناقة والأداء المتميز. تعتبر هذه الأجهزة حلاً فعّالًا لتنظيم وقوف السيارات في المناطق الحضرية، مع تحقيق توازن مثالي بين الكفاءة وتجربة مريحة.",
  },
  {
    id: 47,
    product_image: "/assets/siteimage/prod52.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تصميم متطور يجمع بين الأناقة والأداء المتميز. تقدم هذه الأجهزة حلاً فعّالًا لتنظيم وقوف السيارات في المناطق الحضرية، مع تحقيق توازن مثالي بين الكفاءة وتجربة مريحة.",
  },

  {
    id: 48,
    product_image: "/assets/siteimage/prod53.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تمتاز هذه الأجهزة بأداء استثنائي يسهم في تحسين تجربة وقوف السيارات. تعتبر حلاً فعّالًا لتنظيم المواقف في المناطق الحضرية، حيث تعتمد على تكنولوجيا قراءة الباركود لتحسين الكفاءة وتقديم خدمة مريحة وفعّالة.",
  },
  {
    id: 49,
    product_image: "/assets/siteimage/prod54.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تمتاز هذه الأجهزة بأداء متفرد يسهم في تحسين تجربة وقوف السيارات. تعتبر حلاً فعّالًا لتنظيم المواقف في المناطق الحضرية، حيث تعتمد على تكنولوجيا قراءة الباركود لتحسين الكفاءة وتقديم خدمة مريحة وفعّالة.",
  },
  {
    id: 50,
    product_image: "/assets/siteimage/prod55.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تمتاز هذه الأجهزة بأداء متقدم يسهم في تحسين تجربة وقوف السيارات. تعتبر حلاً فعّالًا لتنظيم المواقف في المناطق الحضرية، حيث تعتمد على تكنولوجيا قراءة الباركود لتحسين الكفاءة وتقديم خدمة مريحة وفعّالة.",
  },
  {
    id: 51,
    product_image: "/assets/siteimage/prod56.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تمتاز هذه الأجهزة بأداء فريد يسهم في تحسين تجربة وقوف السيارات. تعتبر حلاً فعّالًا لتنظيم المواقف في المناطق الحضرية، حيث تعتمد على تكنولوجيا قراءة الباركود لتحسين الكفاءة وتقديم خدمة مريحة وفعّالة.",
  },
  {
    id: 52,
    product_image: "/assets/siteimage/prod57.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تمتاز هذه الأجهزة بأداء رائع يسهم في تحسين تجربة وقوف السيارات. تعتبر حلاً فعّالًا لتنظيم المواقف في المناطق الحضرية، حيث تعتمد على تكنولوجيا قراءة الباركود لتحسين الكفاءة وتقديم خدمة مريحة وفعّالة.",
  },
  {
    id: 53,
    product_image: "/assets/siteimage/prod58.jpeg",
    category_id: 12,
    product_name: "مصدات وحواجز الطرق",
    product_description:
      "تمتاز هذه الأجهزة بأداء فائق يسهم في تحسين تجربة وقوف السيارات. تعتبر حلاً فعّالًا لتنظيم المواقف في المناطق الحضرية، حيث تعتمد على تكنولوجيا قراءة الباركود لتحسين الكفاءة وتقديم خدمة مريحة وفعّالة.",
  },

  // نداء الكافيهات والمطاعم
];
const Products = () => {
  const [rendProducts, setRendProducts] = useState([]);
  const [selectProdNum, setSelectProdNum] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);
  const [origPagProducts, setOrigPagProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const getProducts = () => {
    axios
      .get("")
      .then((res) => {
        setRendProducts(res.data.message);
      })
      .catch((err) => console.log(err));
  };
  const handleSearch = (txt) => {
    if (txt.length == 0) {
      setRendProducts(originalProducts);
      setOrigPagProducts(originalProducts);
    } else {
      let allProducts = [...originalProducts];
      let filteredProducts = [];
      for (let i = 0; i < allProducts.length; i++) {
        if (
          allProducts[i].product_name?.toLowerCase().includes(txt) ||
          allProducts[i].product_description?.toLowerCase().includes(txt)
        ) {
          filteredProducts.push(allProducts[i]);
        }
        setRendProducts(filteredProducts);
        setOrigPagProducts(filteredProducts);
      }
    }
  };

  useEffect(() => {
    if (currentPage == 0) {
      setRendProducts(products.slice(0, selectProdNum));
      setOriginalProducts(products);
    } else if (currentPage == 1) {
      setRendProducts(
        products.slice(selectProdNum, selectProdNum + selectProdNum)
      );
      setOriginalProducts(products);
    } else {
      // console.log(originalcurruntpage*number*1)
      let arr = [];
      for (
        let i = currentPage * 1 * selectProdNum * 1;
        i <= (currentPage + 1) * 1 * selectProdNum - 1;
        i++
      ) {
        if (i < products.length) {
          arr.push(products[i]);
        }
      }
      setRendProducts(arr);
      // setOriginalProducts(currentPage)
    }
  }, [currentPage]);

  useEffect(() => {
    setOriginalProducts(products);
    setOrigPagProducts(products);
    // setRendProducts(products)
  }, []);
  return (
    <Layout noHeaderBg pageName={"Products"}>
      <div>
        <section
          className="splash-area-section"
          style={{ backgroundImage: "url(assets/img/background.jpg)" }}
        >
          <div className="container">
            <div className="splash-area">
              <h2>
                منتجاتنا
                <br />
                من أجود المنتجات الأمنية
              </h2>
            </div>
          </div>
        </section>
        <section className="things-differently gap">
          <div className="cont">
            <div className="search">
              <input
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                type="text"
                placeholder="إبحث هنا..."
              />
            </div>
            <div className="products_content d-flex aliegn-item-center gap-3">
              {rendProducts.map((item, index) => {
                return (
                  <Link
                    style={{ height: "fit-content" }}
                    className="product"
                    href={`product/${item.id}`}
                  >
                    <div
                      style={{ height: "fit-content", maxHeight: "400px" }}
                      className="product_image"
                    >
                      <img src={item.product_image} alt="" />
                    </div>
                    <div className="product_details">
                      <h4>{item.product_name}</h4>
                      <p>{item.product_description}</p>

                      {/* <button className='prod_order_btn'>طلب</button> */}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <Pagination
            originalProducts={origPagProducts}
            number={selectProdNum}
            handlechangecurrentpage={(e) => {
              setCurrentPage(e);
            }}
            currentpage={currentPage}
          />
        </section>
      </div>
    </Layout>
  );
};

export default Products;
