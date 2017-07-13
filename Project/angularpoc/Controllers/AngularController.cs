using System.Web;
using System.Web.Mvc;
using Sitecore.Mvc.Extensions;

namespace angularpoc.Controllers
{
    public static class Angular
    {
        public static IHtmlString RawJsEncodedString<T>(this HtmlHelper<T> htmlHelper, HtmlString str)
        {
            var test = str.ToString();

            if (test.IsEmptyOrNull())
            {
                return new HtmlString(string.Empty);
            }
            return new HtmlString(HttpUtility.JavaScriptStringEncode(test));
        }
    }
}